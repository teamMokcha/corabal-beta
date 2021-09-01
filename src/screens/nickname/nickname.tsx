import React, { ReactElement } from "react";
import styles from "./nickname.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { NicknameForm } from "@Components";
import { View } from "react-native";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Nickname">;
};

export default function Nickname({ navigation }: NavigationProps): ReactElement {
  return (
    <View style={styles.container}>
      <NicknameForm />
    </View>
  );
}
