import React, { ReactElement, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro, Login, SignIn, Nickname, Main, Profile } from "@screens";
import { Pressable, Image, Button, TouchableOpacity } from "react-native";

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
  Nickname: undefined;
  Main: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  // 전역에서 상태 관리하기 전엔, isLoggedOut 변수로 헤더 테스트 - 21.08.20 수연
  // isLoggedOut 이 true 일 때, Intro 페이지부터 나오고
  // isLoggedOut 이 false 일 때(= 로그인 된 상태), Main 부터 나옴
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  return isLoggedOut ? (
    <NavigationContainer theme={initialTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Nickname" component={Nickname} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer theme={initialTheme}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={({ navigation }) => ({
            title: "",
            headerShadowVisible: false,
            // eslint-disable-next-line react/display-name
            headerLeft: () => (
              <Pressable
                style={{ width: 59, height: 56, marginLeft: 16 }}
                onPress={() => navigation.navigate("Profile")}
              >
                <Image style={{ height: 35, width: 35 }} source={require("@assets/profile.png")} />
              </Pressable>
            ),
            // eslint-disable-next-line react/display-name
            headerRight: () => (
              <Pressable
                style={{ width: 59, height: 56 }}
                onPress={() => navigation.navigate("Intro")}
              >
                <Image style={{ height: 35, width: 35 }} source={require("@assets/profile.png")} />
              </Pressable>
            )
          })}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
