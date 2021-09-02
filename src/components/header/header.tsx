import React, { ReactElement } from "react";
import { View, SafeAreaView, Image, StatusBar, TouchableOpacity } from "react-native";
import styles from "./header.style";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  back: boolean;
  close: boolean;
};

const Header = ({ back, close }: HeaderProps): ReactElement => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flexDirection: "row" }}>
        {back && (
          <TouchableOpacity style={styles.iconPosition} onPress={() => navigation.goBack()}>
            <Image source={require("@assets/btn_back.png")} />
          </TouchableOpacity>
        )}
        {close && (
          <View style={styles.closeBtn}>
            <TouchableOpacity style={styles.iconPosition} onPress={() => navigation.goBack()}>
              <Image source={require("@assets/btn_x.png")} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
