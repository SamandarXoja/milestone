import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import backIcon2 from "../../assets/icons/left.png";
import styles from "./test.style";
import Logo from "../../assets/icons/Logo.svg";
function TestAudio() {
  const router = useRouter();

  const [isHome, setIsHome] = useState(false);

  function handleBack() {
    if (!isHome) {
      setIsHome(true);
      router.push("/");

      setTimeout(() => {
        setIsHome(false);
      }, 1000);
    }
  }

  let pages = ["1 page", "2 page", "33 page", "47 page"];

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
                source={backIcon2}
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Toddler level</Text>
        </View>

        <View style={styles.block}>
          {pages.map((item, index) => {
            return (
              <TouchableOpacity style={styles.btn} key={index}>
                <Text style={styles.sub}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TestAudio;
