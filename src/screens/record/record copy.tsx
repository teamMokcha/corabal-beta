import React, { useEffect, ReactElement } from "react";
import styles from "./record.style";
import { TouchableOpacity, View, Image } from "react-native";
import { ButtonGradient, Text } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Record">;
};

const Record = ({ navigation }: NavigationProps): ReactElement => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <TouchableOpacity style={{ margin: 16 }} onPress={() => navigation.goBack()}>
          <Image style={{ width: 18, height: 18 }} source={require("@assets/btn_x.png")} />
        </TouchableOpacity>
      ),
      // eslint-disable-next-line react/display-name
      headerLeft: () => <Text style={{ color: "white" }}>Hide back</Text>,
      headerTintColor: "white"
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.dateFont}>2021.06.28</Text>
      {/* 이미지는 나중에 바꾸고 지금은 레이아웃만 맞추기 210901 */}
      <Image
        style={{ margin: 124, marginTop: 28, marginBottom: 52, width: 111, height: 160 }}
        source={require("@assets/cup-of-today.png")}
      />
      <View style={{ marginLeft: 47, marginRight: 60 }}>
        {/* 샷 */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, fontWeight: "500" }}>샷</Text>
            <Image
              style={{ width: 12, height: 12 }}
              source={require("@assets/shot-of-today.png")}
            />
          </View>
          <View>
            <Image source={require("@assets/empty-shot.png")} />
            <Text>1샷</Text>
          </View>
          <View>
            <Image source={require("@assets/empty-shot.png")} />
            <Text>2샷</Text>
          </View>
          <View>
            <Image source={require("@assets/empty-shot.png")} />
            <Text>3샷</Text>
          </View>
        </View>
        {/* 베이스 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, fontWeight: "500" }}>베이스</Text>
          <View>
            <Image source={require("@assets/water-selected.png")} />
            <Text>물</Text>
          </View>
          <View>
            <Image source={require("@assets/empty-base.png")} />
            <Text>우유</Text>
          </View>
        </View>
        {/* 추가 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, fontWeight: "500" }}>추가</Text>
          <View>
            <Image source={require("@assets/empty-base.png")} />
            <Text>시럽</Text>
          </View>
          <View>
            <Image source={require("@assets/empty-cream.png")} />
            <Text>크림</Text>
          </View>
        </View>
      </View>
      <ButtonGradient title="완료" />
    </View>
  );
};

export default Record;
