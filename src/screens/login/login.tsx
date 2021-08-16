import React, { ReactElement, useState, useRef } from "react";
import { View, ScrollView, TextInput, TextInput as NativeTextInput } from "react-native";
import styles from "./login.styles";
import { ButtonNomal, Text } from "@Components";

// To-Do
// 인풋 컴포넌트 만들기 - 일단 여기서 만들고, 나중에 분리하기
// 유효성 검증 띄울 수 있어야 함 - state 만들고, regex로 걸면 될 듯
// 버튼 width, height 조정 필요

export default function Login(): ReactElement {
  const passwordRef = useRef<NativeTextInput | null>(null);
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });
  const setSignInFormInput = (key: keyof typeof signInForm, value: string) => {
    setSignInForm({ ...signInForm, [key]: value });
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={(styles.inputLabel, { marginBottom: 10 })} weight="400">
          e-mail
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder="corabal@gmail.com"
          autoCompleteType="email"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={value => {
            setSignInFormInput("email", value);
          }}
          value={signInForm.email}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
        />
        <Text style={(styles.inputLabel, { marginTop: 41 })} weight="400">
          password
        </Text>
        <TextInput
          style={styles.inputText}
          autoCompleteType="password"
          keyboardType="visible-password"
          returnKeyType="done"
          secureTextEntry
          ref={passwordRef}
          onChangeText={value => {
            setSignInFormInput("password", value);
          }}
          value={signInForm.password}
        />
        <Text
          style={{
            fontSize: 12,
            lineHeight: 17.38,
            color: "#565656",
            marginTop: 4,
            marginBottom: 43
          }}
          weight="400"
        >
          {`* 최소 8자리 이상의 길이로 입력해주세요 \n `}
        </Text>
        <ButtonNomal title="가입하기" />
      </ScrollView>
    </View>
  );
}
