import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import styles from "./Audiolearn.style";
import Foto from "../../../assets/icons/Image.svg";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
function Audiolearn({ title }) {
  const router = useRouter();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handlePress = () => {
    if (!isButtonPressed) {
      setIsButtonPressed(true);
      router.push("/details/audio/Audios");

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
        <Text style={styles.title}>{title}</Text>
        <View style={styles.info}>
          <Text style={styles.audio}>62 аудио</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Audiolearn;
