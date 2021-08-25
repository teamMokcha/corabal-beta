import React, { ReactElement, useState, useRef } from "react";
import { KeyboardAvoidingView, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import styles from "./auth.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Login">;
};

export default function Login({ navigation }: NavigationProps): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef<TextInput | null>(null);

  return (
    <KeyboardAvoidingView style={{}}>
      {/* <ScrollView contentContainerStyle={authStyles.scrollView}>
        <View style={authStyles.inputContainer}>
          <Text style={(authStyles.inputLabel, { marginBottom: 15 })} weight="400">
            e-mail
          </Text>
          <TextInput
            // style={authStyles.inputText}
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
            <Text style={authStyles.validationText} weight="400">
              {"이메일 주소를 입력해주세요."}
            </Text>
          )}
          <Text style={(authStyles.inputLabel, { marginTop: 41 })} weight="400">
            password
          </Text>
          <TextInput
            // style={authStyles.inputText}
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
            <Text style={authStyles.validationText} weight="400">
              {`* 영문, 숫자, 특수문자를 조합해 8자리 이상으로 입력해주세요.\n `}
            </Text>
          ) : (
            <Text style={authStyles.validationText} weight="400">
              {"올바른 비밀번호를 입력해주세요."}
            </Text>
          )}
        </View>
        {email === "" || password === "" ? (
          <ButtonNomal title="로그인" style={authStyles.button} />
        ) : (
          <ButtonGradient title="로그인" style={authStyles.button} />
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.signInLink} weight="400">
          가입하기
        </Text>
      </TouchableOpacity> */}
    </KeyboardAvoidingView>
  );
}
