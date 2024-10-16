import { router, Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, SafeAreaView } from "react-native";
import backIcon from "../../../assets/icons/left.png";
import styles from "./audios.style";
import Logo from "../../../assets/icons/Logo.svg";
import toddler from "../../../assets/icons/Toddler.jpg";
import { icons } from "../../../constants";

function Audios() {
  const router = useRouter();

  // let level = ["Toddler", "Child", "Preteen", "Teenager", "Youngster", "Adult"];
  let levels = [
    {
      level: "Toddler",
      icon: icons.toddler,
    },
    {
      level: "Child",
      icon: icons.child,
    },
    {
      level: "Preteen",
      icon: icons.Preteen,
    },
    {
      level: "Teenager",
      icon: icons.Teenger,
    },
    {
      level: "Youngster",
      icon: icons.Youngster,
    },
    {
      level: "Adult",
      icon: null,
    },
  ];

  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const handlePress = () => {
    if (!isButtonPressed) {
      setIsButtonPressed(true);
      router.push("/testAudio/TestAudio");

      setTimeout(() => {
        setIsButtonPressed(false);
      }, 1000);
    }
  };

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
              // onPress={handleBack}
              style={{ width: 150, height: 46 }}
            >
              <Logo width="100%" height="100%" />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Выберите свой уровень</Text>

          <View style={styles.block}>
            {levels.map((item, index) => {
              return (
                <Pressable
                  onPress={handlePress}
                  style={styles.btn}
                  key={index}
                  disabled={isButtonPressed}
                >
                  <Image style={styles.levelIcon} source={item.icon} />
                  <Text style={styles.sub}>{item.level}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Audios;
