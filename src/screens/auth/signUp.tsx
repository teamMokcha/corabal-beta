import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Form, FormField, FormSubmitButton, FormCheckButton, LinkToTerms } from "@Components";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@config/URL";
import { signingUp } from "@apis/auth-firebase";
import { Field } from "formik";
import { validationSchema } from "./validationSchema";
import styles from "./auth.styles";

type ValueProps = {
  email: string;
  password: string;
  acceptTerms: boolean;
};

export default function SignUp(): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "", acceptTerms: false }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) =>
            signingUp(values.email, values.password, values.acceptTerms)
          }
        >
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
