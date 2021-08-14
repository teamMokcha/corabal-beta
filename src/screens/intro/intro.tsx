import React, { ReactElement } from "react";
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./intro.styles";
import { Text } from "@Components";
import { LinearGradient } from "expo-linear-gradient";

// 1) 전체 레이아웃 잡아보기 - Scrollview의 스타일을 잡아주기
// 2) 이미지 삽입하기
// 3) 버튼 삽입하기
// 4) 폴더 분리하기

export default function Intro(): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require("@assets/logo-temp.png")}></Image>
        <TouchableOpacity>
          <LinearGradient
            colors={["hsla(199, 79%, 71%, 1)", "hsla(220, 100%, 73%, 1)"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              width: 294,
              height: 48,
              paddingTop: 14,
              paddingBottom: 14
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#ffff",
                lineHeight: 20.27
              }}
              weight="400"
            >
              가입하기
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
