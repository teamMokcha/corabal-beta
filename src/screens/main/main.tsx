import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./main.style";

export default function Main(): ReactElement {
  return (
    <View style={styles.container}>
      <Text>Main page.</Text>
    </View>
  );
}
