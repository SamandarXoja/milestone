import { Stack, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { Image, Keyboard, Pressable, ScrollView } from "react-native";
import { Text, TouchableOpacity, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backIcon from "../../assets/icons/left.png";
import styles from "./practice.style";
import Logo from "../../assets/icons/Logo.svg";
import { TextInput } from "react-native";
import Send from "../../assets/icons/send.svg";
import { SendHorizontal } from "lucide-react-native";

import { Audio } from "expo-av";
import AudioSave from "../../components/audioSave/AudioSave";

function Practice() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);
  const [question, SetQuestion] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const [inputTextShow, setInputTextShow] = useState(false);
  const [isBtn, setIsBtn] = useState(false);

  const [answerText, setAnswerText] = useState([]);
  const [inputText, setInputText] = useState(null);

  const [voiceShow, setVoiceShow] = useState(false);

  const [data, setData] = useState(null);
  const [choosedLevel, setChoosedLevel] = useState(0);
  const [micShow, setMicShow] = useState(false);

  const [audioTextAnswer, setAudioTextAnswer] = useState(false);

  useEffect(() => {
    fetch(
      `https://milestoneserver.onrender.com/practice?category=${choosedLevel}&limit=1`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
    // setIsBtn(true)
  }, [choosedLevel]);

  // console.log(choosedLevel);
  // console.log(data);

  // useEffect(() => {
  //   if (data) {
  //     setTimeout(() => {
  //       setIsBtn(true);
  //     }, 1000);
  //   }
  // }, [data]);

  let numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];

  const handleAnswer = function (item) {
    setIsBtn(true);
    SetQuestion(false);
    setChoosedLevel(item);
  };

  function handleQuestion(item) {
    const newLevel = item;

    setMicShow(false);

    if (newLevel !== choosedLevel) {
      setChoosedLevel(item);
      setShowCategories(false);
      setIsBtn(true);
      setShowAnswer(false);
    } else {
      setIsBtn(true);
      setMicShow(true);
      setShowCategories(false);
      setShowAnswer(false);
      fetch(
        `https://milestoneserver.onrender.com/practice?category=${newLevel}&limit=1`
      )
        .then((res) => res.json())
        .then((json) => setData(json));
    }

    let updateMassive = [...answerText];

    updateMassive.shift();
    setAnswerText(updateMassive);
  }

  const handleVoice = () => {
    setVoiceShow(true);
    setIsBtn(false);
    setMicShow(true);
    setShowAnswer(false);
    // setShowCategories(true);
  };

  const handleInputText = () => {
    setInputTextShow(true);
    setIsBtn(false);
  };

  function addText() {
    if (inputText <= 0) {
      return;
    }
    setAnswerText([...answerText, inputText]);
    setInputText("");
    setInputTextShow(false);
    setShowAnswer(true);
    setShowCategories(true);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", height: '100%'}}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          height: "100%",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={backIcon}
                resizeMode="cover"
                style={styles.button}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              disabled={isHome}
              // onPress={handleBack}
              style={{ width: 150, height: 46 }}
            >
              <Logo width="100%" height="100%" />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{height: '100%', flex: 1}}
        // contentContainerStyle={{flex: 1}}
      >
        <View style={styles.content} >
          {question ? (
            <>
              <Text style={styles.title}>
                Какой “Objective” вы хотите попрактиковать,{" "}
              </Text>
              <View style={styles.block}>
                {numbers.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.btn}
                      key={index}
                      onPress={() => handleAnswer(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </>
          ) : (
            <View style={{flex: 1, }}>
              {data?.map((item) => {
                return (
                  <Text style={styles.testText} key={item._id}>
                    {item?.rus}
                  </Text>
                );
              })}

              {voiceShow && (
                <AudioSave
                  data={data}
                  numbers={numbers}
                  handleQuestion={handleQuestion}
                  micShow={micShow}
                  setMicShow={setMicShow}
                  audioTextAnswer={audioTextAnswer}
                  setAudioTextAnswer={setAudioTextAnswer}
                  setShowCategoriess={setShowCategories}
                />
              )}

              <View style={styles.ask}>
                {answerText.map((el, index) => (
                  <Text key={index} style={styles.askText}>
                    {el}
                  </Text>
                ))}
              </View>
              {showAnswer && (
                <>
                  {data?.map((item) => {
                    return (
                      <Text style={styles.testText2} key={item._id}>
                        {item.eng}
                      </Text>
                    );
                  })}
                </>
              )}

              {isBtn && (
                <View style={styles.choice}>
                  <TouchableOpacity style={styles.vocie} onPress={handleVoice}>
                    <Text style={styles.send}>Отправить голосовой</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.text}
                    onPress={handleInputText}
                  >
                    <Text style={styles.send}>Отправить текст</Text>
                  </TouchableOpacity>
                </View>
              )}

              {inputTextShow && (
                <>
                  <View style={styles.select}>
                    <TextInput
                      style={styles.input}
                      placeholder="Напиши свой ответ"
                      value={inputText}
                      onChangeText={(text) => setInputText(text)}
                    />
                    <TouchableOpacity style={styles.sendBtn} onPress={addText}>
                      <SendHorizontal color={"#fff"} />
                    </TouchableOpacity>
                  </View>
                </>
              )}

              {showCategories && (
                <View style={[styles.block, styles.mt]}>
                  {numbers.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={styles.btn}
                        key={index}
                        onPress={() => handleQuestion(item)}
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
               

            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Practice;
