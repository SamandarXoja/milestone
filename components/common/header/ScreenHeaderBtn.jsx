import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";
import Logo from "../../../assets/icons/Logo.svg";
import { SvgUri } from "react-native-svg";

const ScreenHeaderBtn = ({ dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <View style={{ width: 150, height: 46 }}>
        <Logo width="100%" height="100%" />
      </View>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
