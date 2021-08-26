import React, { ReactElement } from "react";
import { KeyboardAvoidingView, ScrollView, View, TouchableOpacity } from "react-native";
import { Form, FormField, FormSubmitButton, Text } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { loggingIn } from "@apis/auth-firebase";
import { Field } from "formik";
import { validationSchema } from "./validationSchema";
import styles from "./auth.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Login">;
};

type ValueProps = {
  email: string;
  password: string;
};

export default function Login({ navigation }: NavigationProps): ReactElement {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validateOnMount={false}
          isInitialValid={false}
          onSubmit={(values: ValueProps) => loggingIn(values.email, values.password)}
        >
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
