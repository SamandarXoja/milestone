import React, { useState } from "react";
import styles from "./Instruction.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import backIcon from "../../assets/icons/left.png";
import { Text, View } from "react-native";
import Logo from "../../assets/icons/Logo.svg";

function Instruction() {
  const router = useRouter();

  const [learn, setLearn] = useState(false);
  const [examination, setExamination] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [practice, setPractice] = useState(false);

  const [instructions, instructionsSet] = useState([
    "Инструкция для изучения",
    "Инструкция для проверки",
    "Инструкция для практики",
  ]);

  function choiceInstruction(number) {
    if (number == 0) {
      setLearn(true);
      setShowInstructions(false);
    } else if (number == 1) {
      setLearn(false);
      setShowInstructions(false);
      setExamination(true);
    } else if (number == 2) {
      setLearn(false);
      setShowInstructions(false);
      setExamination(false);
      setPractice(true);
    }
  }

  const handleBack = function () {
    setShowInstructions(true);
    setLearn(false);
    setExamination(false);
    setPractice(false);
  };

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
            <TouchableOpacity style={{ width: 150, height: 46 }}>
              <Logo width="100%" height="100%" />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {practice && (
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Инструкция для проверки</Text>
            <Text>
              Для эффективности книги, автор создал свою программу изучения
              английского языка, и написал достаточно много предложений на
              русском, чтобы их переводить на английский и развивать Writing📝,
              а так же дать маленький
            </Text>
            <Text style={styles.bolder}>толчок для развития Speaking'а🗣</Text>
            <Text>Для этого вам необходимо</Text>
            <Text style={styles.bolder}>
              переводить устно вслух☝️, потом написать в бот,
            </Text>
            <Text>
              чтобы он скинул вам перевод, как правильно это будет на
              английском.
            </Text>

            <Text style={[styles.line, styles.mts]}>
              Чтобы получить следующее предложение нажмите на номер objective'а
              ещё раз
            </Text>
            <Text>
              и также всё идёт по кругу♻️ Если захотите вернуться обратно
              нажмите на кнопку "Назад".
            </Text>

            <Text style={styles.mts}>
              Сложность предложений будет расти с уровня "Toddler (Beginner-
              A1)" до уровня "Adult (Advanced- C1)". Названия этих уровней
              соответствует авторской программе, которую написал автор вашего
              любимого словаря.
            </Text>
            <Text style={styles.bolder}>Эффективность и результат</Text>
            <Text>вот, что обещает эта программа.</Text>
            <Text style={styles.line}>
              Если вам сложно переводить предложения, вам необходимо подучиться
              у Axo.
            </Text>
            <Text>Для этого обращайтесь ему лично по</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://t.me/Axo_axick")}
            >
              <Text style={styles.links}> @axo_axick</Text>
            </TouchableOpacity>
            <Text style={styles.mts}>
              К сожалению, выдавать все упражнения (предложения) программы,
              автор решил держать строго конфиденциально✖️, по причине которого
              все предложения доступны только для учеников автора. Но у вас есть
              5 пробных предложений для испытания своих знаний😌
            </Text>
            <TouchableOpacity
              style={[styles.block, styles.backs, styles.mbs]}
              onPress={handleBack}
            >
              <Text>Назад</Text>
            </TouchableOpacity>
          </View>
        )}

        {examination && (
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Инструкция для проверки</Text>
            <Text>
              Есть готовые аудио по страницам, которую вы можете слушать и
              проверять на сколько вы всё освоили. Чтобы получить максимальную
              пользу с аудио,
              <Text style={styles.line}>
                пытайтесь успевать пока тикают часы.
              </Text>
              <Text>
                Если не успеваете в определённых словах, значит вам необходимо
                хорошенько поучить и эти слова.
              </Text>
              <Text style={styles.bolder}>Пытайтесь один раз повторить</Text>
              <Text>за Ахо,</Text>
              <Text style={styles.bolder}>если не успели ответить☝️</Text>
            </Text>
            <Text style={styles.boxTwo}>
              <Text style={styles.line}>При возможности</Text>
              <Text style={styles.line}>
                слушайте один раз в свободное время,
              </Text>
              <Text> это занимает 5-7 минут</Text>
              <Text style={styles.bolder}>
                Главное последовательность, НЕ интенсивность🤗
              </Text>
            </Text>
            <Text style={styles.link}>Будут вопросы, обращайтесь: </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://t.me/Axo_axick")}
            >
              <Text style={styles.links}>@axo_axick</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.block, styles.backs]}
              onPress={handleBack}
            >
              <Text>Назад</Text>
            </TouchableOpacity>
          </View>
        )}

        {learn && (
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Инструкция для изучения</Text>
            <Text>
              Есть готовые аудио по страницам, которую вы можете слушать и
              изучать вместе с Ахо. Чтобы получить максимальную пользу с аудио,
              вам
              <Text style={styles.bolder}> необходимо повторять </Text>{" "}
              (обязательно) <Text style={styles.bolder}>вслух за голосом</Text>{" "}
              🗣 Если обстоятельства не позволяют, хотя бы шёпотом.
            </Text>
            <Text style={styles.boxTwo}>
              <Text style={styles.line}>
                Обращайте внимание на произношение слов
              </Text>{" "}
              и слушайте аудио в любых обстоятельствах (в автобусе, в метро и
              т.д.), когда они позволяют😌 Улучшайте свой словарный запас в своё
              удовольствие.
            </Text>
            <Text style={styles.link}>Будут вопросы, обращайтесь: </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://t.me/Axo_axick")}
            >
              <Text style={styles.links}>@axo_axick</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.block, styles.backs]}
              onPress={handleBack}
            >
              <Text>Назад</Text>
            </TouchableOpacity>
          </View>
        )}

        {showInstructions && (
          <>
            <Text style={styles.question}>С чем вам помочь?</Text>
            <View style={styles.content}>
              {instructions.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.block}
                    key={index}
                    onPress={() => choiceInstruction(index)}
                  >
                    <Text style={styles.text}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.block}
              >
                <Text>Назад</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Instruction;
