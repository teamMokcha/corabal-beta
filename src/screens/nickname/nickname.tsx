import React, { ReactElement, useState } from "react";
import { View, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { Text, ButtonGradient, ButtonNormal } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState, globalErrorStateDuringAuth } from "@stores/stores";
import { setNickname } from "@services/auth-service";
import styles from "./nickname.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Nickname">;
};

export default function Nickname({ navigation }: NavigationProps): ReactElement {
  const [nicknameValue, setNicknameValue] = useState("");
  const currentUserState = HSUseState(globalUserState);
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);

  const handleSettingNickname = async () => {
    const [response, error] = await setNickname(currentUserState.userEmail.get(), nicknameValue);
    if (error) {
      errorStateDuringAuth.modalVisibility.set(true);
      errorStateDuringAuth.nicknameError.set(true);
      errorStateDuringAuth.nicknameErrorMessage.set("알 수 없는 오류가 발생했어요!");
    } else {
      console.log(`${response} 닉네임 DB 연동 성공!`);
      currentUserState.nicknameIn.set(true);
      currentUserState.nickname.set(nicknameValue);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <Image style={styles.profile} source={require("@assets/profile.png")} />
        <TextInput
          style={styles.inputContainer}
          textAlign={"center"}
          underlineColorAndroid={"#ffffff"}
          placeholder="닉네임을 입력해주세요"
          maxLength={8}
          value={nicknameValue}
          onChangeText={value => setNicknameValue(value)}
        />
        <Text style={styles.validationText} weight="400">
          * 최대 8글자 이내로 입력해주세요.
        </Text>
        {nicknameValue.length > 0 && nicknameValue.length <= 8 ? (
          <ButtonGradient title="완료" style={styles.button} onPress={handleSettingNickname} />
        ) : (
          <ButtonNormal title="완료" style={styles.button} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
