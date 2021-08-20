import React, { ReactElement, useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import styles from "./login.styles";
import { AuthForm, Text } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
// To-Do
// form 컴포넌트 만들기 - 일단 여기서 만들고, 나중에 분리하기
// 유효성 검증 띄울 수 있어야 함 - state 만들고, regex로 걸면 될

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Login">;
};

export default function Login({ navigation }: NavigationProps): ReactElement {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  });

  const handleInputValue = (key: keyof typeof inputValue, value: string) => {
    setInputValue({ ...inputValue, [key]: value });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <AuthForm inputValue={inputValue} handleInputValue={handleInputValue} buttonTitle="로그인" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.signInLink} weight="400">
          가입하기
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
