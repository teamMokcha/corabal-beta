import React, { ReactElement, useLayoutEffect } from "react";
import { TouchableOpacity, View, Image, ScrollView } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";
import { ButtonGradient, Text } from "@Components";
import styles from "./shop.style";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Shop">;
};

const Shop = ({ navigation }: NavigationProps): ReactElement => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 11, height: 22, margin: 16 }}
              source={require("@assets/btn_back.png")}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={require("@assets/profile.png")} />
          <View>
            <Text style={styles.profileName}>
              <Text style={styles.profileBoldName}>커라밸</Text>님
            </Text>
            <Text style={styles.profilePointFont}>
              <Image style={styles.point} source={require("@assets/btn_point.png")} />
              {} 51p
            </Text>
          </View>
        </View>
        <ButtonGradient style={styles.watchingAd} title="광고 보기 5p" />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.cupWrapper}>
          <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
          <Text>
            <Image style={styles.point} source={require("@assets/btn_point.png")} />
            <Text>{} 30p</Text>
          </Text>
        </View>
        <View style={styles.cupWrapper}>
          <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
          <Text>
            <Image style={styles.point} source={require("@assets/btn_point.png")} />
            <Text>{} 100p</Text>
          </Text>
        </View>
        <View style={styles.cupWrapper}>
          <Image style={styles.emptyCup} source={require("@assets/empty-cup.png")} />
          <Text>
            <Image style={styles.point} source={require("@assets/btn_point.png")} />
            <Text>{} 100p</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Shop;
