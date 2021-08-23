// import React, { ReactElement, useState, useRef } from "react";
// import { ScrollView, TextInput, View } from "react-native";
// import authStyles from "../auth-form.styles";
// import { ButtonNomal, ButtonGradient, Text } from "@Components";

// export default function SignUpInput(): ReactElement {
//   return (
//     <ScrollView contentContainerStyle={authStyles.scrollView}>
//       <View style={authStyles.inputContainer}>
//         <Text style={(authStyles.inputLabel, { marginBottom: 15 })} weight="400">
//           e-mail
//         </Text>
//         <TextInput
//           style={authStyles.inputText}
//           placeholder="corabal@gmail.com"
//           autoCompleteType="email"
//           keyboardType="email-address"
//           returnKeyType="next"
//           maxLength={30}
//           value={}
//           onSubmitEditing={() => {
//             passwordRef.current?.focus();
//           }}
//         />
//         {email !== "" ? null : (
//           <Text style={authStyles.validationText} weight="400">
//             {"이메일 주소를 입력해주세요."}
//           </Text>
//         )}
//         <Text style={(authStyles.inputLabel, { marginTop: 41 })} weight="400">
//           password
//         </Text>
//         <TextInput
//           style={authStyles.inputText}
//           autoCompleteType="password"
//           keyboardType="visible-password"
//           returnKeyType="done"
//           secureTextEntry
//           maxLength={30}
//           ref={passwordRef}
//           value={password}
//           onChangeText={value => {
//             setPassword(value);
//           }}
//         />
//         {password === "" ? (
//           <Text style={authStyles.validationText} weight="400">
//             {`* 영문, 숫자, 특수문자를 조합해 8자리 이상으로 입력해주세요.\n `}
//           </Text>
//         ) : (
//           <Text style={authStyles.validationText} weight="400">
//             {"올바른 비밀번호를 입력해주세요."}
//           </Text>
//         )}
//       </View>
//       {isValid === false ? (
//         <ButtonNomal title="가입하기" style={authStyles.button} />
//       ) : (
//         <ButtonGradient title="가입하기" style={authStyles.button} onPress={() => handleSignUp()} />
//       )}
//     </ScrollView>
//   );
// }
