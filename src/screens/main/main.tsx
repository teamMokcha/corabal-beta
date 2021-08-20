import React, { ReactElement } from "react";
import { View, Button, Image, Pressable } from "react-native";
import { Text } from "@Components";
import styles from "./main.style";

export default function Main(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Main page.</Text>
    </View>
  );
}
