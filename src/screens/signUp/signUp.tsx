import React, { ReactElement, useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import styles from "./signUp.styles";
import { AuthForm, Text } from "@Components";
import { auth } from "@config/firebase/firebaseConfig";
import { email, password } from "@stores/stores";

// To-Do
// 1. Config에 AuthContext 만들고 > AuthProvider로 APP 전체를 감싸주기
// >>> 3) authForm의 버튼에서 createAccoutn 함수 호출
// >>> 3) 백엔드에 해당 이메일과 비밀번호로 User 만들어줌
// 유효성 검증 띄울 수 있어야 함 - state 만들고, regex로 걸면 될

export default function SignUp(): ReactElement {
  const [isValid, setIsValid] = useState(false);
  const [emailInvalidWarning, setEmailInvalidWarning] = useState("");
  const [passwordInvalidWarning, setPasswordInvalidWarning] = useState("");

  const createAccount = async () => {
    const emailRegex = new RegExp("");
    const passwordRegex = new RegExp("");
    if (email.get() === "") {
      setEmailInvalidWarning("이메일 주소를 입력해주세요.");
    } else if (emailRegex.test(email.get())) {
      setEmailInvalidWarning("올바른 이메일 주소를 입력해주세요.");
    }

    if (password.get() === "") {
      setPasswordInvalidWarning("비밀번호를 입력해주세요.");
    } else if (passwordRegex.test(password.get())) {
      setPasswordInvalidWarning("올바른 비밀번호를 입력해주세요.");
    }

    if (
      email.get() !== "" &&
      password.get() !== "" &&
      emailRegex.test(email.get()) &&
      passwordRegex.test(password.get())
    ) {
      try {
        await auth.createUserWithEmailAndPassword(email.get(), password.get());
        setIsValid(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <AuthForm buttonTitle="가입하기" buttonState={isValid} />
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
