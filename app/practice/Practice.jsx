import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backIcon from "../../assets/icons/left.png";
import styles from "./practice.style";
import Logo from "../../assets/icons/Logo.svg";

function Practice() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);
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

  function handleBack() {
    if (!isHome) {
      setIsHome(true);
      router.push("/");

      setTimeout(() => {
        setIsHome(false);
      }, 1000);
    }
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
            onPress={handleBack} 
            style={{ width: 150, height: 46 }}>
             
              <Logo width="100%" height="100%" />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Какой “Objective” вы хотите попрактиковать,{" "}
          </Text>
          <View style={styles.block}>
            {numbers.map((item, index) => {
              return (
                <TouchableOpacity style={styles.btn} key={index}>
                  <Text style={styles.texts}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Practice;
