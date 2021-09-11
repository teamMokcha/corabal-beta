import React, { ReactElement } from "react";
import { Image, TextInput, KeyboardAvoidingView } from "react-native";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalErrorStateDuringAuth } from "@stores/stores";
import { settingNickname } from "@services/auth-service";
import Text from "../text/text";
import NormalButton from "../button/button-normal";
import GradientButton from "../button/button-gradient";
import styles from "./nickname-form.styles";

export default function NicknameForm(): ReactElement {
  const currentUserState = HSUseState(globalUserState);
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);
  const nickNameValue = currentUserState.nickname.get();

  return (
    <KeyboardAvoidingView style={styles.scrollView}>
      <Image style={styles.profile} source={require("@assets/profile.png")} />
      <TextInput
        style={styles.inputContainer}
        textAlign={"center"}
        underlineColorAndroid={"#ffffff"}
        placeholder="닉네임을 입력해주세요"
        maxLength={8}
        value={nickNameValue}
        onChangeText={value => {
          currentUserState.nickname.set(value);
        }}
      />
      <Text style={styles.validationText} weight="400">
        * 최대 8글자 이내로 입력해주세요.
      </Text>
      {nickNameValue.length > 0 && nickNameValue.length <= 8 ? (
        <GradientButton
          title="완료"
          style={styles.button}
          onPress={() => {
            settingNickname(nickNameValue).then(error => {
              if (error !== undefined) {
                errorStateDuringAuth.modalVisibility.set(true);
                errorStateDuringAuth.nicknameError.set(true);
                errorStateDuringAuth.nicknameErrorMessage.set("알 수 없는 오류가 발생했어요!");
              } else {
                currentUserState.nicknameIn.set(true);
              }
            });
          }}
        />
      ) : (
        <NormalButton title="완료" style={styles.button} />
      )}
    </KeyboardAvoidingView>
  );
}
