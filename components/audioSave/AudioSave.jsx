import React, { useState, useRef, useEffect } from "react";
import { Button, Text, View } from "react-native";
import styles from "./audiosave.style";
import { Audio } from "expo-av";
import { TouchableOpacity, Animated, StyleSheet } from "react-native";
import { Mic, MicOff, Play, Trash2 } from "lucide-react-native";
import { useRouter } from "expo-router";

function AudioSave({
  data,
  numbers,
  handleQuestion,
  micShow,
  setMicShow,
  audioTextAnswer,
  setAudioTextAnswer,
  setShowCategoriess,
}) {
  const router = useRouter();
  const [recording, setRecording] = useState(null);
  const [recordings, setRecordings] = useState([]);

  const [showCategories, setShowCategories] = useState(true);
  const [audioSave, setAudioSave] = useState(true);
  const [second, setSecond] = useState(0);
  const [milSecond, setMilSecond] = useState(0);

  const scaleValue = useRef(new Animated.Value(1)).current;

  const waveOpacity = useRef(new Animated.Value(0)).current;
  const waveScale = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = useState(false);
  
  

  const handlePressOut = async () => {
    if (recording) {
      setIsPressed(false);

      try {
        await recording.stopAndUnloadAsync();
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        const newRecording = {
          sound,
          duration: getDurationFormatted(status.durationMillis),
          file: recording.getURI(),
        };
        setRecordings([...recordings, newRecording]);
        setRecording(null);
        console.log("Audio sent:", newRecording.file);
        setMicShow(false);
        setAudioTextAnswer(true);
        setShowCategories(true);
      } catch (error) {
        console.log("Error stopping recording:", error);
      }
    }
    setSecond(0);
    setMilSecond(0);
  };

  function choiceCategories(item) {
    handleQuestion(item);
    // console.log(item);
    setShowCategories(false);
    setMicShow(false);
    clearRecordings();
    setAudioTextAnswer(false);
  }

  const handlePressIn = async () => {
    setIsPressed(true);

    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModelIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onPressIn = () => {
    Animated.parallel([
      Animated.timing(waveOpacity, {
        toValue: 0.5, // видимость волны
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(waveScale, {
        toValue: 2, // расширение волны
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 0.9, // уменьшение кнопки
        useNativeDriver: true,
      }),
    ]).start();
    handlePressIn();
  };

  const onPressOut = () => {
    Animated.parallel([
      Animated.timing(waveOpacity, {
        toValue: 0, // скрытие волны
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(waveScale, {
        toValue: 1, // возврат волны к исходному размеру
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 1, // возврат кнопки к нормальному размеру
        useNativeDriver: true,
      }),
    ]).start();
    handlePressOut();
  };

  function getDurationFormatted(milliseconds) {
    const minutes = Math.floor(milliseconds / 1000 / 60);
    const seconds = Math.round((milliseconds / 1000) % 60);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <React.Fragment key={index}>
          {audioTextAnswer &&
            data?.map((item, i) => {
              return (
                <Text key={item._id || i} style={styles.showText}>
                  {item.eng}
                </Text>
              );
            })}

          <View key={index} style={styles.row}>
            <Text style={styles.fill}>
              Recording #{index + 1} | {recordingLine.duration}
            </Text>
            <TouchableOpacity
              style={styles.play}
              onPress={() => recordingLine.sound.replayAsync()}
            >
              <Play color="#fff" />
            </TouchableOpacity>
          </View>

          {showCategories && (
            <View style={[styles.block, styles.mt]}>
              {numbers.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.btn}
                    key={index}
                    onPress={() => choiceCategories(item)}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                style={styles.back}
                onPress={() => router.back()}
              >
                <Text>Назад</Text>
              </TouchableOpacity>
            </View>
          )}
        </React.Fragment>
      );
    });
  }

  function clearRecordings() {
    setRecordings([]);
  }

  return (
    <>
      <View style={styless.hi}>
        {micShow && (
          <Animated.View style={styless.buttonWrapper}>
            <TouchableOpacity
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              activeOpacity={1}
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                flex: 1,
              }}
            >
              <View style={styless.startBtn}>
                <Animated.View
                  style={[
                    styless.wave,
                    {
                      opacity: waveOpacity,
                      transform: [{ scale: waveScale }],
                    },
                  ]}
                />

                <View style={styles.btnText}>
                  {recording ? <Mic color="#fff" /> : <Mic color="#fff" />}
                </View>
              </View>
              <Text>
                {second <= 9 ? `0${second}` : `${second}`},{milSecond}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
      {getRecordingLines()}
      {/* {recordings.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearRecordings}>
          <Trash2 color="#fff" />
        </TouchableOpacity>
      )} */}
    </>
  );
}

const styless = StyleSheet.create({
  hi: {
    flex: 1,
    // display: 'flex',
    // height: 100
    width: "100%",
    // justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: 'red'
    marginTop: 30,
  },
  buttonWrapper: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    // height: 100,
    // backgroundColor: 'red',
    justifyContent: "center",
  },
  startBtn: {
    backgroundColor: "#3D5CFF",
    padding: 20,
    borderRadius: 50,
    position: "relative", // для позиционирования волны и иконки
  },
  btnText: {
    position: "absolute",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: 2, // Иконка всегда сверху
  },
  wave: {
    position: "absolute",
    top: 0,
    left: -5,
    bottom: 0,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "rgba(98, 0, 238, 0.5)", // Полупрозрачная волна
    zIndex: 1, // Волна под иконкой
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});

export default AudioSave;
