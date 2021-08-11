import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro, Login, SignIn } from "@screens";

export type StackNavigatorParams = {
  Intro: undefined;
  Login: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
