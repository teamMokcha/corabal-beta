import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Form, FormField, FormSubmitButton, FormCheckButton, LinkToTerms } from "@Components";
import { createUserCollection } from "@services/create-user-collection";
import { createCredential } from "@services/auth-service";
import { globalErrorStateDuringAuth, globalUserState } from "@stores/stores";
import ErrorModal from "../error-modal/error-modal";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@config/URL";
import { Field } from "formik";
import * as Yup from "yup";
import styles from "./auth.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SignUp">;
};

type ValueProps = {
  email: string;
  password: string;
  acceptTerms: boolean;
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
    .label("password"),
  acceptTerms: Yup.bool() //
    .oneOf([true])
    .required("* 비밀번호를 입력해주세요.")
    .label("acceptTerms")
});

export default function SignUp({ navigation }: NavigationProps): ReactElement {
  const errorStateDuringAuth = HSUseState(globalErrorStateDuringAuth);
  const currentUserState = HSUseState(globalUserState);

  const signingUp = async (email: string, password: string, acceptTerms: boolean) => {
    const [credential, error] = await createCredential(email, password);
    if (error) {
      const errorCode = error.code;
      errorStateDuringAuth.modalVisibility.set(true);
      errorStateDuringAuth.signUpError.set(true);
      if (errorCode === "auth/email-already-in-use") {
        errorStateDuringAuth.signUpErrorMessage.set("이미 가입된 이메일입니다!");
      } else if (errorCode === "auth/invalid-email") {
        errorStateDuringAuth.signUpErrorMessage.set("유효하지 않은 이메일 주소입니다!");
      } else if (errorCode === "auth/operation-not-allowed") {
        errorStateDuringAuth.signUpErrorMessage.set("서버에서 이메일 인증을 막았어요!");
      } else if (errorCode === "auth/weak-password") {
        errorStateDuringAuth.signUpErrorMessage.set("비밀번호가 너무 약해요!");
      }
    } else if (credential) {
      const authorizedEmail = credential.user.email;
      const [response, error] = await createUserCollection(
        authorizedEmail,
        acceptTerms,
        new Date()
      );
      if (error) {
        console.error(error);
      } else {
        // 성공 시 response는 undefined
        console.log(response);
        currentUserState.userEmail.set(authorizedEmail);
        errorStateDuringAuth.signUpError.set(false);
        errorStateDuringAuth.signUpErrorMessage.set("");
        currentUserState.userEmail.set(authorizedEmail);
        navigation.navigate("Nickname");
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "", acceptTerms: false }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) => {
            signingUp(values.email, values.password, values.acceptTerms);
          }}
        >
          <ErrorModal />
          <View style={styles.emailContainer}>
            <Field
              name="email"
              component={FormField}
              autoFocus={true}
              placeholder="corabal@gamil.com"
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
          <Field //
            type="checkbox"
            name="acceptTerms"
            component={FormCheckButton}
          />
          <FormSubmitButton title="가입하기" />
        </Form>
        <View style={[styles.linkContainer, { marginTop: 158 }]}>
          <LinkToTerms URL={PRIVACY_POLICY}>{"개인 정보 처리 방침"}</LinkToTerms>
          <LinkToTerms URL={TERMS_OF_USE}>{"이용 약관"}</LinkToTerms>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
