import React, { ReactElement, useState, useRef } from "react";
import { KeyboardAvoidingView, ScrollView, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./signUp.styles";
import { ButtonNomal, ButtonGradient, Text } from "@Components";
import { signingUp } from "../../../api/auth-firebase";

export default function SignUp(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const passwordRef = useRef<TextInput | null>(null);

  const handleSignUp = (): void => {
    if (email !== "" && password !== "") {
      setIsValid(true);
      signingUp(email, password);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.inputContainer}>
          <Text style={(styles.inputLabel, { marginBottom: 15 })} weight="400">
            e-mail
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="corabal@gmail.com"
            autoCompleteType="email"
            keyboardType="email-address"
            returnKeyType="next"
            maxLength={30}
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          {email !== "" ? null : (
            <Text style={styles.validationText} weight="400">
              {"이메일 주소를 입력해주세요."}
            </Text>
          )}
          <Text style={(styles.inputLabel, { marginTop: 41 })} weight="400">
            password
          </Text>
          <TextInput
            style={styles.inputText}
            autoCompleteType="password"
            keyboardType="visible-password"
            returnKeyType="done"
            secureTextEntry
            maxLength={30}
            ref={passwordRef}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
          />
          {password === "" ? (
            <Text style={styles.validationText} weight="400">
              {`* 영문, 숫자, 특수문자를 조합해 8자리 이상으로 입력해주세요.\n `}
            </Text>
          ) : (
            <Text style={styles.validationText} weight="400">
              {"올바른 비밀번호를 입력해주세요."}
            </Text>
          )}
        </View>
        {email === "" || password === "" ? (
          <ButtonNomal title="가입하기" style={styles.button} />
        ) : (
          <ButtonGradient title="가입하기" style={styles.button} onPress={() => handleSignUp()} />
        )}
      </ScrollView>

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
