import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";
import Avatar from "../../../assets/icons/Avatar.svg";
import { SvgUri } from "react-native-svg";

const ScreenHeaderBtnRight = ({ dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <View style={{ width: 36, height: 49 }}>
        <Avatar width="100%" height="100%" />
      </View>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtnRight;
