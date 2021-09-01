import React, { useEffect, ReactElement, useState } from "react";
import styles from "./record.style";
import { TouchableOpacity, View, Image } from "react-native";
import { ButtonGradient, Text } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Record">;
};

const Record = ({ navigation }: NavigationProps): ReactElement => {
  const [oneShot, setOneShot] = useState(false);
  const [twoShot, setTwoShot] = useState(true);
  const [threeShot, setThreeShot] = useState(false);
  const [water, setWater] = useState(true);
  const [milk, setMilk] = useState(false);
  const [syrup, setSyrup] = useState(false);
  const [cream, setCream] = useState(false);

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
      <View style={{ marginLeft: 125, marginRight: 124, marginTop: 28, marginBottom: 31 }}>
        <Image
          style={{ width: "100%", height: 160 }}
          source={require("@assets/cup-of-today.png")}
        />
      </View>
      {/* total option container */}
      <View style={styles.totalOptionContainer}>
        {/* shot option container */}
        <View style={styles.eachOptionContainer}>
          <View style={styles.shotFontContainer}>
            <Text>샷</Text>
            <Image style={styles.shotIcon} source={require("@assets/shot-of-today.png")} />
          </View>
          <View style={styles.flexDirRow}>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              <Text>1샷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              <Text>2샷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-shot.png")} />
              <Text>3샷</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* base option container */}
        <View style={styles.eachOptionContainer}>
          <Text style={styles.baseTitle}>베이스</Text>
          <View style={styles.flexDirRow}>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              <Text>물</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              <Text>우유</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* else option container */}
        <View style={styles.eachOptionContainer}>
          <Text style={styles.elseTitle}>추가</Text>
          <View style={styles.flexDirRow}>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-base.png")} />
              <Text>시럽</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionAlign}>
              <Image style={styles.optionImg} source={require("@assets/empty-cream.png")} />
              <Text>크림</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ButtonGradient style={{ height: 48 }} title="완료" />
    </View>
  );
};

export default Record;
