import React, { ReactElement } from "react";
import { View, ScrollView, Image, Pressable, StyleSheet } from "react-native";
import styles from "./intro.styles";
import { Text } from "@Components";

// 1) 전체 레이아웃 잡아보기 - Scrollview의 스타일을 잡아주기
// 2) 이미지 삽입하기
// 3) 버튼 삽입하기
// 4) 폴더 분리하기

export default function Intro(): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.logo} source={require("@assets/logo-temp.jpg")}></Image>
        <Pressable style={{ backgroundColor: "blue" }}>
          <Text style={{ fontSize: 25 }} weight="700">
            Hey this is Intro page
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
