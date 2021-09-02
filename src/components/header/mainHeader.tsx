import React, { ReactElement } from "react";
import { View, SafeAreaView, Image, StatusBar, TouchableOpacity } from "react-native";
import styles from "./mainHeader.style";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/routers";

const MainHeader = (): ReactElement => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ marginLeft: 16, marginRight: "auto", marginTop: 13, marginBottom: 15 }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image resizeMode="contain" source={require("@assets/header-profile.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 18, marginRight: 16, marginTop: 17, marginBottom: 24 }}
        >
          <Image source={require("@assets/header-calendar.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 16, marginRight: 16, marginTop: 19, marginBottom: 25 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image source={require("@assets/header-hamburger.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
