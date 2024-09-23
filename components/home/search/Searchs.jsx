import React from "react";
import { TextInput, View,TouchableOpacity,Image } from "react-native";
import styles from "./searchs.style";
import { icons } from "../../../constants";

function Searchs() {
  return (
    <View style={styles.searchBlock}>
      <TextInput
        style={styles.searchContainer}
        placeholder="Поиск"
        placeholderTextColor="#B8B8D2"
      />
      <TouchableOpacity>
        <Image style={styles.searchBtn} source={icons.search} resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
}

export default Searchs;
