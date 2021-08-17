import React, { ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./intro.styles";
import { ButtonGradient, ButtonNomal } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Intro">;
};

export default function Intro({ navigation }: NavigationProps): ReactElement {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={require("@assets/logo-temp.png")} />
        <ButtonNomal
          style={styles.buttonNomal}
          title="로그인"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <ButtonGradient
          style={styles.buttonGradient}
          title="가입하기"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
        {/* profile 화면 테스트용 21.08.17 수연 */}
        <ButtonNomal
          style={styles.buttonNomal}
          title="프로필"
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
      </ScrollView>
    </View>
  );
}
