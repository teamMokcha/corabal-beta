import React, { ReactElement, RefObject, useRef } from "react";
import { KeyboardAvoidingView, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { ButtonGradient, ButtonNomal, Text } from "@Components";
import { signingUp } from "@apis/auth-firebase";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

const SignUp = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <KeyboardAvoidingView style={styles.container}>
          <ScrollView contentContainerStyle={styles.container}>
            <TextInput
              placeholder="corabal@gamil.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"
              returnKeyLabel="next"
              // onSubmitEditing={() => passwordRef.current?.focus()}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <TextInput
              // ref={passwordRef}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              autoCapitalize="none"
              secureTextEntry
              textContentType="password"
              value={values.password}
              returnKeyType="go"
              returnKeyLabel="go"
            />
            {errors.password && touched.password && <Text>{errors.password}</Text>}
            <ButtonGradient onPress={() => handleSubmit} title="가입하기" />
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default SignUp;

// export default function SignUp(): ReactElement {
//   const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
//     validationSchema: validationSchema,
//     initialValues: { email: "", password: "" },
//     onSubmit: values => {
//       signingUp(values.email, values.password);
//     }
//   });

// return (
//   <KeyboardAvoidingView style={styles.container}>
//     <ScrollView>
//       <View style={authLayout.inputContainer}>
//         <Text style={authLayout.inputLabel} weight="400">
//           {"email"}
//         </Text>
//         <TextInput
//           placeholder="corabal@gamil.com"
//           autoCapitalize="none"
//           autoCompleteType="email"
//           keyboardType="email-address"
//           returnKeyType="next"
//           returnKeyLabel="next"
//           onChangeText={handleChange("email")}
//           onBlur={handleBlur("email")}
//           error={errors.email}
//           touched={touched.email}
//           onSubmitEditing={() => passwordRef.current?.focus()}
//         />
//         <Text style={authLayout.inputLabel} weight="400">
//           {"password"}
//         </Text>
//         <TextInput
//           ref={passwordRef}
//           secureTextEntry
//           autoCompleteType="password"
//           autoCapitalize="none"
//           keyboardAppearance="dark"
//           returnKeyType="go"
//           returnKeyLabel="go"
//           onChangeText={handleChange("password")}
//           onBlur={handleBlur("password")}
//           error={errors.password}
//           touched={touched.password}
//           onSubmitEditing={() => handleSubmit}
//         />
//       </View>
//       <ButtonNomal title="가입하기" style={authLayout.button} onPress={handleSubmit} />
//       <TouchableOpacity style={styles.termsOfUseLink}>
//         <Text style={styles.termsOfUseLinkText} weight="400">
//           개인정보 처리 방침
//         </Text>
//         <Text style={styles.termsOfUseLinkText} weight="400">
//           이용약관
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   </KeyboardAvoidingView>
// );
// }
