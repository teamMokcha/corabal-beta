import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { Text } from "@Components";
import styles from "./profile.style";

export default function Profile(): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={require("@assets/profile.png")} />
        <View style={styles.user}>
          <Text onPress={() => console.log("누르면 이름을 바꿀 수 있음")} style={styles.userName}>
            커라밸님
          </Text>
          <Image source={require("@assets/updating-user-name.png")} />
        </View>
        <Text style={styles.userMail}>coffeeout@gmail.com</Text>
      </View>
      <View style={styles.records}>
        <View style={styles.record}>
          <Text style={styles.recordTitle}>기록</Text>
          <Text style={styles.recordContent}>48</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordTitle}>포인트</Text>
          <Text style={styles.recordContent}>50p</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.recordTitle}>내 컵</Text>
          <Image source={require("@assets/my-cup.png")} />
          <Text style={styles.recordTitle}>힘주기 {"\n"} +10P</Text>
        </View>
      </View>
      <View style={styles.config}>
        <Text
          style={styles.configScripts}
          onPress={() => console.log("비밀번호 설정하는 페이지로 이동")}
        >
          비밀번호 재설정
        </Text>
        <Text
          style={styles.configScripts}
          onPress={() => console.log("로그아웃 후 인트로 페이지로 이동")}
        >
          로그아웃
        </Text>
        <Text
          style={styles.accountDeletion}
          onPress={() => alert("계정을 삭제하시겠습니까? YES or NO")}
        >
          계정 삭제
        </Text>
      </View>
    </View>
  );
}
