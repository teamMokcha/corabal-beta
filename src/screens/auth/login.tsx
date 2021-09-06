import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "@stores/stores";
import { Form, FormField, FormSubmitButton, Text } from "@Components";
import { loggingIn } from "@services/auth-service";
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

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) => {
            loggingIn(values.email, values.password) //
              .then(error => {
                if (error !== undefined) {
                  errorStateDuringAuth.modalVisibility.set(true);
                  errorStateDuringAuth.logInError.set(true);
                  const errorLog = `${error}`;
                  if (errorLog.includes("no user")) {
                    errorStateDuringAuth.logInErrorMessage.set("가입되지 않은 이메일입니다!");
                  } else if (errorLog.includes("password is invalid")) {
                    errorStateDuringAuth.logInErrorMessage.set("비밀번호가 틀렸습니다ㅠ!");
                  } else {
                    errorStateDuringAuth.logInErrorMessage.set("알 수 없는 오류가 발생했어요!");
                  }
                } else {
                  errorStateDuringAuth.logInError.set(false);
                  currentUserState.loggedIn.set(true);
                  currentUserState.userEmail.set(values.email);
                }
              });
          }}
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
