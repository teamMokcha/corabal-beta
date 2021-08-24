import React, { ReactElement, RefObject, useRef } from "react";
import { KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { signingUp } from "@apis/auth-firebase";
import { Field } from "formik";
import * as Yup from "yup";
import { Text, Form, FormField, FormSubmitButton } from "@Components";
import styles from "./signUp.styles";
import authLayout from "../layout.styles";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("올바른 이메일을 입력해주세요.")
    .max(32, "너무 깁니다.")
    .required("이메일을 입력해주세요.")
    .label("email"),
  password: Yup.string()
    .matches(/\d/, "비밀번호에 숫자를 포함해주세요.")
    .matches(/\w*[a-zA-Z]\w*/, "비밀번호에 영어를 포함해주세요.")
    .matches(/(?=.*[!@#$%^&*])/, "비밀번호에 특수문자를 포함해주세요.")
    .min(8, "8글자 이상으로 입력해주세요.")
    .max(32, "너무 깁니다.")
    .required("비밀번호를 입력해주세요.")
    .label("password")
});

// const passwordRef = React.createRef<TextInput>(null);

export default function SignUp(): ReactElement {
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Form
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            validateOnMount={false}
            isInitialValid={false}
            onSubmit={(values: any) => console.log(values)}
          >
            <Field
              component={FormField}
              name="email"
              placeholder="corabal@gamil.com"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"
              returnKeyLabel="next"
            />

            <Field
              // ref={passwordRef}
              component={FormField}
              name="password"
              secureTextEntry
              textContentType="password"
              returnKeyType="go"
              returnKeyLabel="go"
            />
            <FormSubmitButton title="가입하기" />
          </Form>

          <TouchableOpacity style={styles.termsOfUseLink}>
            <Text style={styles.termsOfUseLinkText} weight="400">
              개인정보 처리 방침
            </Text>
            <Text style={styles.termsOfUseLinkText} weight="400">
              이용약관
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
