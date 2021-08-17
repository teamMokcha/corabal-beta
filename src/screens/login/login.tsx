import React, { ReactElement, useState, useRef } from "react";
import { View, ScrollView, TextInput, TextInput as NativeTextInput } from "react-native";
import styles from "./login.styles";
import { ButtonNomal, Text } from "@Components";

// To-Do
// avoid keyboard view로 바꾸기
// form 컴포넌트 만들기 - 일단 여기서 만들고, 나중에 분리하기
// 유효성 검증 띄울 수 있어야 함 - state 만들고, regex로 걸면 될

// Work-Flow (회원가입)
// 1) e-mail validation
// - null인지 체크 > 이메일을 입력해주세요.
// - 이메일 형식인지 체크 > 정확한 이메일 주소를 입력해주세요.
// - 존재하는 유저가 아닌지 체크 > 이미 가입되어 있는 이메일입니다.
// 2) password validation
// - null인지 체크 >
// 법적인 원칙) 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상 또는 3종류 이상을 조합하여 최소 8자리 이상의 길이로 구성
// 타 사이트 예시) 안전한 비밀번호는 6자 이상이어야 하고 문자와 숫자가 조합되어야 합니다.
// - 보안 경고 체크 >
// 연속적인 숫자나 생일, 전화번호 등 추측하기 쉬운 개인정보 및 아이디와 비슷한 비밀번호는 사용하지 않는 것을 권고
// 3) validation 통과 ? 가입하기 버튼 active : 가입하기 버튼 disabled

// Work-Flow (로그인)
// 1) e-mail validation
// - null인지 체크 > 이메일을 입력해주세요.
// - 이메일 형식인지 체크 > 정확한 이메일 주소를 입력해주세요.
// 2) password validation
// - null인지 체크 >
// 법적인 원칙) 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상 또는 3종류 이상을 조합하여 최소 8자리 이상의 길이로 구성
// 타 사이트 예시) 안전한 비밀번호는 6자 이상이어야 하고 문자와 숫자가 조합되어야 합니다.
// - 비밀번호 잊어버린 경우 >
//  [1] 이메일 입력했는지 체크 >> 먼저 이메일 주소를 입력해주세요.
//  [2] 이메일 주소로 비밀번호 바꿀 수 있는 메일 보내기
// 3) validation 통과 ? 로그인 버튼 active : 로그인 버튼 disabled

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
        <View style={styles.inputContainer}>
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
            {`* 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상 \n  또는 3종류 이상을 조합하여 최소 8자리 이상으로 구성되어야 합니다. \n `}
          </Text>
        </View>
        <ButtonNomal title="가입하기" style={{ width: 328, height: 48 }} />
      </ScrollView>
    </View>
  );
}
