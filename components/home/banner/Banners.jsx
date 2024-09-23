import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./banner.style";
import Banner1 from "../../../assets/icons/baner1.svg";
import { icons } from "../../../constants";

function Banners() {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannerItem}>
        <Image source={icons.ads} style={styles.bannerImg} />
      </View>
      <View style={[styles.bannerItem, styles.bannerRight]}>
        <Image source={icons.ads1} style={styles.bannerImg} />
      </View>
    </View>
  );
}

export default Banners;
