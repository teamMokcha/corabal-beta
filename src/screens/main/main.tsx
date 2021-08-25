import React, { ReactElement, useLayoutEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@Components";
import styles from "./main.style";
import { DrawerActions } from "@react-navigation/routers";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Main">;
};

export default function Main({ navigation }: NavigationProps): ReactElement {
  // console.log(navigation);
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{ width: 24, height: 24, marginLeft: 16 }}
              source={require("@assets/profile.png")}
            />
          </TouchableOpacity>
        </View>
      ),
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => console.log("Go to Calendar.")}>
            <Image
              style={{ width: 14, height: 15, margin: 16 }}
              source={require("@assets/btn_calendar.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              style={{ width: 16, height: 12, margin: 16 }}
              source={require("@assets/btn_navigation.png")}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Main page.</Text>
    </View>
  );
}
