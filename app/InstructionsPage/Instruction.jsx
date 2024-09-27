import React, { useState } from "react";
import styles from "./Instruction.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import backIcon from "../../assets/icons/left.png";
import { Text, View } from "react-native";
import Logo from "../../assets/icons/Logo.svg";

function Instruction() {
  const router = useRouter();

  const [instructions, instructionsSet] = useState([
    "Инструкция для изучения",
    "Инструкция для проверки",
    "Инструкция для практики",
  ]);

  function choiceInstruction(number) {
    console.log(number);
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
            <TouchableOpacity style={{ width: 150, height: 46 }}>
              <Logo width="100%" height="100%" />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          
        </View>
        
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default Instruction;
