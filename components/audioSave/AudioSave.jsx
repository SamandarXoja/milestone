import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import styles from "./audiosave.style";
import { Audio } from "expo-av";
import { TouchableOpacity } from "react-native";
import { Mic, MicOff, Play, Trash2 } from "lucide-react-native";
function AudioSave() {
  const [recording, setRecording] = useState(null);
  const [recordings, setRecordings] = useState([]);

  async function startRecording() {
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
  }

  async function stopRecording() {
    setRecording(null);

    await recording.stopAndUnloadAsync();
    let allRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    allRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(allRecordings);
  }

  function getDurationFormatted(milliseconds) {
    const minutes = Math.floor(milliseconds / 1000 / 60);
    const seconds = Math.round((milliseconds / 1000) % 60);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
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
      );
    });
  }

  function clearRecordings() {
    setRecordings([]);
  }

  return (
    <View>
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={recording ? stopRecording : startRecording}
        >
          {recording ? (
            <View style={styles.btnText}>
              <MicOff color="#fff" />
            </View>
          ) : (
            <View style={styles.btnText}>
              {/* <Text>Start</Text>  */}
              <Mic color="#fff" />
            </View>
          )}
        </TouchableOpacity>
      </View>
      {getRecordingLines()}
      {recordings.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearRecordings}>
          <Trash2 color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default AudioSave;
