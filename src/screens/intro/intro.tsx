import React, { ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./intro.styles";
import { ButtonGradient, ButtonNomal } from "@Components";

export default function Intro(): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require("@assets/logo-temp.png")} />
        <ButtonNomal style={styles.buttonNomal} title="로그인" />
        <ButtonGradient style={styles.buttonGradient} title="가입하기" />
      </ScrollView>
    </View>
  );
}
