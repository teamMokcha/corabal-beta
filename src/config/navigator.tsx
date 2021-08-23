import React, { ReactElement } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro, Login, SignUp, Nickname } from "@screens";

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
  SignUp: undefined;
  Nickname: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  return (
    <NavigationContainer theme={initialTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Nickname" component={Nickname} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
