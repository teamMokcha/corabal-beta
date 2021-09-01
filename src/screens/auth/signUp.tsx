import React, { ReactElement } from "react";
import { useState as HSUseState } from "@hookstate/core";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Form, FormField, FormSubmitButton, FormCheckButton, LinkToTerms } from "@Components";
import { signingUp } from "@services/auth-service";
import { globalErrorStateDuringAuth } from "@stores/stores";
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

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "", acceptTerms: false }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) => {
            signingUp(values.email, values.password, values.acceptTerms) //
              .then(error => {
                // firebase는 성공 시에 undefined를 반환하므로 아래와 같이 에러를 처리
                if (error !== undefined) {
                  errorStateDuringAuth.modalVisibility.set(true);
                  errorStateDuringAuth.signUpError.set(true);
                  const errorLog = `${error}`;
                  if (errorLog.includes("email address is already in use")) {
                    errorStateDuringAuth.signUpErrorMessage.set("이미 가입된 이메일입니다!");
                  } else {
                    errorStateDuringAuth.signUpErrorMessage.set("알 수 없는 오류가 발생했어요!");
                  }
                } else {
                  errorStateDuringAuth.signUpError.set(false);
                  navigation.navigate("Nickname");
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
