import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "@stores/stores";
import { Form, FormField, FormSubmitButton, Text } from "@Components";
import { logInWithFirebase } from "@services/auth-service";
import { globalErrorStateDuringAuth } from "@stores/stores";
import ErrorModal from "../error-modal/error-modal";
import { Field } from "formik";
import * as Yup from "yup";
import styles from "./auth.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Login">;
};

type ValueProps = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("* 정확한 이메일 주소를 입력해주세요.")
    .max(32, "* 너무 깁니다.")
    .required("* 이메일을 입력해주세요.")
    .label("email"),
  password: Yup.string()
    .matches(/\d/, "* 비밀번호에 숫자를 포함해주세요.")
    .matches(/\w*[a-zA-Z]\w*/, "* 비밀번호에 영어를 포함해주세요.")
    .matches(/(?=.*[!@#$%^&*])/, "* 비밀번호에 특수문자를 포함해주세요.")
    .min(8, "* 8글자 이상으로 입력해주세요.")
    .max(32, "* 너무 깁니다.")
    .required("* 비밀번호를 입력해주세요.")
    .label("password")
});

export default function Login({ navigation }: NavigationProps): ReactElement {
  const currentUserState = HSUseState(globalUserState);
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);

  const handleLogIn = async (email: string, password: string) => {
    const [loggedInUser, error] = await logInWithFirebase(email, password);
    if (error) {
      const errorCode = error.code;
      errorStateDuringAuth.modalVisibility.set(true);
      errorStateDuringAuth.logInError.set(true);
      if (errorCode === "auth/invalid-email") {
        errorStateDuringAuth.logInErrorMessage.set("유효하지 않은 이메일입니다.");
      } else if (errorCode === "auth/user-disabled") {
        errorStateDuringAuth.logInErrorMessage.set("정지된 계정입니다.");
      } else if (errorCode === "auth/user-not-found") {
        errorStateDuringAuth.logInErrorMessage.set("가입되지 않은 이메일입니다.");
      } else if (errorCode === "auth/wrong-password") {
        errorStateDuringAuth.logInErrorMessage.set("비밀번호가 틀렸습니다!");
      }
    } else {
      currentUserState.userEmail.set(loggedInUser.email);
      errorStateDuringAuth.logInError.set(false);
      currentUserState.loggedIn.set(true);
      currentUserState.userEmail.set(email);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) => handleLogIn(values.email, values.password)}
        >
          <ErrorModal />
          <View style={styles.emailContainer}>
            <Field
              name="email"
              component={FormField}
              autoFocus={true}
              placeholder="가입한 이메일을 입력해주세요."
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <Field //
            name="password"
            component={FormField}
            secureTextEntry
            textContentType="password"
          />
          <FormSubmitButton title="로그인" />
        </Form>
        <TouchableOpacity
          style={[styles.linkContainer, { marginTop: 216 }]}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.LinkText} weight="400">
            가입하기
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
