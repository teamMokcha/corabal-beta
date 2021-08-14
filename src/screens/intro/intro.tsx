import React, { ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./intro.styles";
import { Button } from "@Components";

export default function Intro(): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require("@assets/logo-temp.png")} />
        <Button style={styles.button} title="가입하기" />
      </ScrollView>
    </View>
  );
}
