import React, { ReactElement } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro, Login, SignIn } from "@screens";

const initialTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
};

export type StackNavigatorParams = {
  Intro: undefined;
  Login: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  return (
    // 네비게이션을 2개의 컨테이너 or 스택으로 나눠야 할 수도 있음
    // 1) 헤더가 보이지 않는 영역 - 인트로, 회원가입, 로그인
    // 2 헤더가 보이는 영역 - 인덱스 등
    <NavigationContainer theme={initialTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
