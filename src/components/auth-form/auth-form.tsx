import React, { ReactElement, useState, useRef } from "react";
import { View, ScrollView, TextInput } from "react-native";
import ButtonNomal from "../button/button-nomal";
import ButtonGradient from "../button/button-gradient";
import Text from "../text/text";
import styles from "./auth-form.styles";
import { email, password } from "@stores/stores";

export default function authForm({ buttonTitle, buttonState }: any): ReactElement {
  const passwordRef = useRef<TextInput | null>(null);
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
          maxLength={30}
          onChangeText={value => {
            email.set(value);
          }}
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
          maxLength={30}
          ref={passwordRef}
          onChangeText={value => {
            password.set(value);
          }}
        />
        <Text style={styles.validationText} weight="400">
          {`* 영문, 숫자, 특수문자를 조합해 8자리 이상으로 입력해주세요.\n `}
        </Text>
      </View>
      {buttonState === false ? (
        <ButtonNomal title={buttonTitle} style={styles.button} />
      ) : (
        <ButtonGradient title={buttonTitle} style={styles.button} />
      )}
    </ScrollView>
  );
}
