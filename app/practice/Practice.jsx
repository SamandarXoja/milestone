import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Keyboard, Pressable, ScrollView } from "react-native";
import { Text, TouchableOpacity, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backIcon from "../../assets/icons/left.png";
import styles from "./practice.style";
import Logo from "../../assets/icons/Logo.svg";
import { TextInput } from "react-native";
import Send from "../../assets/icons/send.svg";
import { SendHorizontal } from "lucide-react-native";

import {Audio} from 'expo-av';
import AudioSave from "../../components/audioSave/AudioSave";



function Practice() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);

  const [question, SetQuestion] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const [inputTextShow, setInputTextShow] = useState(false);
  const [isBtn, setIsBtn] = useState(true);

  const [answerText, setAnswerText] = useState([]);
  const [inputText, setInputText] = useState(null);

  const [voiceShow, setVoiceShow] = useState(false);
  







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

  const handleAnswer = function () {
    SetQuestion(false);
  };

  function handleQuestion() {
    setShowCategories(false);
    setIsBtn(true);
  }

  const handleVoice = () => {
    setVoiceShow(true);
    setIsBtn(false);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
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
      >
        <View style={styles.content}>
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
                      onPress={handleAnswer}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </>
          ) : (
            <>
              <Text style={styles.testText}>
                Русские всегда склонны преодолевать любые трудности.
              </Text>

              {voiceShow && (
                <AudioSave />
              )}

              <View style={styles.ask}>
                {answerText.map((el, index) => (
                  <Text key={index} style={styles.askText}>
                    {el}
                  </Text>
                ))}
              </View>
              {showAnswer && (
                <Text style={styles.testText2}>
                  Russians always tend to overcome any challenges.
                </Text>
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
                        onPress={handleQuestion}
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
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Practice;
