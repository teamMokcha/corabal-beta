import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { signingUp } from "@apis/auth-firebase";
import { Field } from "formik";
import * as Yup from "yup";
import { Form, FormField, FormSubmitButton, FormCheckButton, LinkToTerms } from "@Components";
import styles from "../auth.styles";

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
    .label("password"),
  acceptTerms: Yup.bool() //
    .oneOf([true])
    .required("* 비밀번호를 입력해주세요.")
    .label("acceptTerms")
});

export default function SignUp(): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "", acceptTerms: false }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: any) => signingUp(values.email, values.password)}
        >
          <View style={styles.eamilContainer}>
            <Field
              name="email"
              component={FormField}
              autoFocus={true}
              placeholder="corabal@gamil.com"
              placeholderTextColor="#C4C4C4"
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
        <View style={styles.termsContainer}>
          <LinkToTerms>{"개인 정보 처리 방침"}</LinkToTerms>
          <LinkToTerms>{"이용 약관"}</LinkToTerms>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
