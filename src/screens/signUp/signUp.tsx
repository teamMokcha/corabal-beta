import React, { ReactElement, useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import styles from "./signUp.styles";
import { AuthForm, Text } from "@Components";

// To-Do
// form 컴포넌트 만들기 - 일단 여기서 만들고, 나중에 분리하기
// 유효성 검증 띄울 수 있어야 함 - state 만들고, regex로 걸면 될

export default function Login(): ReactElement {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  });

  const handleInputValue = (key: keyof typeof inputValue, value: string) => {
    setInputValue({ ...inputValue, [key]: value });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <AuthForm
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        buttonTitle="가입하기"
      />
      <TouchableOpacity style={styles.termsOfUseLink}>
        <Text style={styles.termsOfUseLinkText} weight="400">
          개인정보 처리 방침
        </Text>
        <Text style={styles.termsOfUseLinkText} weight="400">
          이용약관
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
