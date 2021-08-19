import React, { ReactElement } from "react";
import { Image, TextInput, KeyboardAvoidingView } from "react-native";
import styles from "./nickname-form.styles";
import Text from "../text/text";
import NomalButton from "../button/button-nomal";
import GradientButton from "../button/button-gradient";

// value가 0보다 크고 8보다 작게, 중복 검사는 추후에 생각

export default function NicknameForm(): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.scrollView}>
      <Image style={styles.profile} source={require("@assets/profile.png")} />
      <TextInput
        style={styles.inputContainer}
        textAlign={"center"}
        underlineColorAndroid={"#ffffff"}
        placeholder="닉네임을 입력해주세요."
        maxLength={8}
      />
      {/* <Text style={styles.validationText} weight="400">
        * 최대 8글자 이내로 입력해주세요.
      </Text> */}
      <NomalButton title="완료" style={styles.button}></NomalButton>
      {/* <GradientButton title="완료" style={styles.button} /> */}
    </KeyboardAvoidingView>
  );
}
