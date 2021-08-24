import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View, TouchableOpacity } from "react-native";

import { signingUp } from "@apis/auth-firebase";
import { Field } from "formik";
import * as Yup from "yup";
import { LinkToTerm, Form, FormField, FormSubmitButton } from "@Components";
import styles from "./signUp.styles";
import layoutStyles from "../layout.styles";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("* 올바른 이메일을 입력해주세요.")
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

export default function SignUp(): ReactElement {
  return (
    <KeyboardAvoidingView style={layoutStyles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: any) => signingUp(values.email, values.password)}
        >
          <View style={layoutStyles.eamilContainer}>
            <Field
              autoFocus={true}
              component={FormField}
              name="email"
              placeholder="corabal@gamil.com"
              placeholderTextColor="#C4C4C4"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <Field component={FormField} name="password" secureTextEntry textContentType="password" />
          <FormSubmitButton title="가입하기" />
        </Form>
        <LinkToTerm style={styles.form}>{"개인 정보 처리 방침"}</LinkToTerm>
        <LinkToTerm>{"이용 약관"}</LinkToTerm>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
