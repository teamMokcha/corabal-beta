import React, { ReactElement } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro, Login, SignUp, Nickname, Main, Profile, Shop, Cups } from "@screens";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, Linking, TouchableOpacity, View } from "react-native";
import { Text } from "@Components";
import styles from "./navigator.style";

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
  Main: undefined;
  Profile: undefined;
  Shop: undefined;
  Cups: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
  return (
    <NavigationContainer theme={initialTheme}>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Nickname" component={Nickname} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Drawer
export type DrawerNavigationParams = {
  Main: undefined;
  Profile: undefined;
  Shop: undefined;
  Cups: undefined;
};

const Drawer = createDrawerNavigator();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DrawerContent(props: any) {
  // console.log(props)
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.aimContainer}>
        <Text style={styles.aim}>
          목표 <Text style={styles.aimStrong}>1</Text>일 <Text style={styles.aimStrong}>1</Text>잔
        </Text>
        <Text style={styles.aimSetting}>목표 설정 {">"}</Text>
      </View>
      <View style={styles.shopAndCups}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("Shop")}>
          <Image style={{ width: 48, height: 48 }} source={require("@assets/shop.png")} />
          <Text>컵 가게</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("Cups")}>
          <Image style={{ width: 48, height: 48 }} source={require("@assets/cups.png")} />
          <Text>컵 보관함</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.fonts}
          activeOpacity={0.5}
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Text>공지사항</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fonts}
          activeOpacity={0.5}
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Text>이용약관</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fonts}
          activeOpacity={0.5}
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Text>개인정보 정책</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fonts}
          activeOpacity={0.5}
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Text>개발자 소개</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.version}>v1.0.0</Text>
    </DrawerContentScrollView>
  );
}

export const DrawerNavigator = (): ReactElement => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props: any) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: "front",
        headerTintColor: "white",
        drawerPosition: "right",
        swipeEnabled: false
      }}
    >
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Shop" component={Shop} />
      <Drawer.Screen name="Cups" component={Cups} />
    </Drawer.Navigator>
  );
};
