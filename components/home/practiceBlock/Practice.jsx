import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./practiceBlock.style";
import Foto from "../../../assets/icons/Image.svg";
import { useRouter } from "expo-router";

function Practice() {
  const router = useRouter();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  let handlePress = function () {
    if (!isButtonPressed) {
      setIsButtonPressed(true);
      router.push("/practice/Practice");

      setTimeout(() => {
        setIsButtonPressed(false);
      }, 1000);
    }
  };

  return (
    <Pressable 
    style={styles.box}
    onPress={handlePress}
    disabled={isButtonPressed}
    >
      <Foto />
      <View>
        <Text style={styles.title}>Предложения для Практики</Text>
        <View style={styles.info}>
          <Text style={styles.audio}>infinity</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Practice;
