import React, { ReactElement, useState, useRef } from "react";
import { View, ScrollView, TextInput } from "react-native";
import ButtonNomal from "../button/button-nomal";
import ButtonGradient from "../button/button-gradient";
import Text from "../text/text";
import styles from "./auth-form.styles";

export default function authForm({ inputValue, handleInputValue, buttonTitle }: any): ReactElement {
  const passwordRef = useRef<TextInput | null>(null);
  const [isValid, setIsValid] = useState(false);
  return (
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
          onChangeText={value => {
            handleInputValue("email", value);
          }}
          value={inputValue.email}
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
            handleInputValue("password", value);
          }}
          value={inputValue.password}
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
          {`* 영문, 숫자, 특수문자를 조합해 8자리 이상으로 입력해주세요.\n `}
        </Text>
      </View>
      <ButtonNomal title={buttonTitle} style={{ width: 328, height: 48 }} />
    </ScrollView>
  );
}
