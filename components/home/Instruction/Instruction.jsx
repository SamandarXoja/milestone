// import { View } from 'lucide-react-native'
import React, { useState } from "react";
import styles from "./instruction.style";
import { View, Text, Pressable } from "react-native";
import Foto from "../../../assets/icons/Image.svg";
import { router, useRouter } from "expo-router";
function Instruction() {
  const router = useRouter();

  const [isButtonPressed, setIsButtonPressed] = useState(false);

  let handlePress = function () {
    if (!isButtonPressed) {
      setIsButtonPressed(true);
      router.push("/InstructionsPage/Instruction");

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
        <Text style={styles.title}>Инструкция</Text>
        <View style={styles.info}>
          <Text style={styles.audio}>4</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Instruction;
