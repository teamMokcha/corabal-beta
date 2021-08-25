import React, { ReactElement, useLayoutEffect } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "@Components";
import styles from "./cups.style";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Cups">;
};

const Cups = ({ navigation }: NavigationProps): ReactElement => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 11, height: 22, marginLeft: 16, marginRight: 16 }}
              source={require("@assets/btn_back.png")}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.myTumbler}>내 텀블러</Text>
        <View style={styles.tumblerWrapper}>
          <Text style={styles.tumblerFonts}>현재 텀블러</Text>
          <Image style={styles.presentTumbler} source={require("@assets/empty-cup.png")} />
        </View>
        <View>
          <Text style={styles.myTumblersFonts}>보유 텀블러</Text>
          <View style={styles.tumblersWrapper}>
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
            <Image style={styles.tumblers} source={require("@assets/empty-cup.png")} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cups;
