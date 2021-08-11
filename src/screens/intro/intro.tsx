import React from "react";
import { View } from "react-native";
import styles from "./intro.styles";
import { Text } from "@Components";
import { ReactElement } from "react";

export default function Intro(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }} weight="700">
        Hey this is Intro page
      </Text>
    </View>
  );
}
