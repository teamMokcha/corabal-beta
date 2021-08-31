import React, { ReactElement, useLayoutEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonGradient, Text } from "@Components";
import styles from "./main.style";
import { DrawerActions } from "@react-navigation/routers";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";
import { ScrollView } from "react-native-gesture-handler";
import { FAB } from "react-native-elements";
import { Divider } from "react-native-elements";
import Goal from "../goal/goal";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Main">;
};

export default function Main({ navigation }: NavigationProps): ReactElement {
  const [isEmpty, setIsEmpty] = useState(true);

  const showGoalModal = () => {
    console.log("Show Goal Modal.");
  };

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
    <ScrollView>
      <View style={styles.aimContainer}>
        <TouchableOpacity style={styles.aimBtnContainer} activeOpacity={0.5}>
          <Text style={styles.aim}>
            목표 <Text style={styles.pointFont}>1</Text>일 <Text style={styles.pointFont}>1</Text>잔
          </Text>
          <Image style={styles.aimNextBtn} source={require("@assets/btn_next.png")} />
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <Image style={styles.mainCatImg} source={require("@assets/main-cat.png")} />
          <View style={{ flex: 1 }}>
            <Text style={styles.statusTitleFont}>이번달 목표 성공일</Text>
            <Image
              style={{ width: "100%", height: 7 }}
              source={require("@assets/progressbar.png")}
            />
            <Text style={styles.statusByMonthFont}>
              <Text style={styles.pointFont}>16</Text>/31
            </Text>
            <Text style={styles.statusTitleFont}>이번달 기록</Text>
            <Image
              style={{ width: "100%", height: 7 }}
              source={require("@assets/progressbar.png")}
            />
            <Text style={styles.statusByMonthFont}>
              <Text style={styles.pointFont}>16</Text>/31
            </Text>
            <View style={styles.myPointContainer}>
              <Image style={styles.myPointImg} source={require("@assets/btn_point.png")} />
              <Text style={styles.myPointFont}>51p</Text>
            </View>
          </View>
        </View>
      </View>
      <Divider orientation="horizontal" width={12} color="#EEEEEE" />
      <View style={styles.todayContainer}>
        <View style={styles.todayFontWrapper}>
          <Text style={styles.todayFont}>Today</Text>
          {isEmpty ? null : (
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.cupUpdatingBtn}>수정</Text>
            </TouchableOpacity>
          )}
        </View>
        {isEmpty ? (
          <>
            <View style={styles.emptyCupContainer}>
              <Image
                style={styles.emptyCupImg}
                source={require("@assets/recorded-empty-cup.png")}
              />
              <Text style={styles.emptyCupSaying}>오늘 한 잔도 마시지 않았어요!</Text>
              <Text style={styles.emptyCupSaying}>마감을 누르면 포인트가 바로 적립됩니다.↓</Text>
            </View>
            <ButtonGradient style={styles.emptyCupRecordingBtn} title="오늘 0잔 기록" />
          </>
        ) : (
          <View>
            <View style={styles.recordedCupContainer}>
              <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
              <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
              <Image style={styles.recordedCupImg} source={require("@assets/recorded-cup.png")} />
            </View>
            <ButtonGradient style={styles.recordingFinishBtn} title="기록 완료" />
          </View>
        )}
      </View>
      <Divider orientation="horizontal" width={12} color="#EEEEEE" />
      <View style={styles.recordContainer}>
        <Text style={styles.thisMonthFont}>6월</Text>
        <Text style={styles.totalCupsFont}>
          <Text style={styles.pointFont}>30</Text>잔
        </Text>
        <View style={styles.totalRecordContainer}>
          <View style={styles.eachRecordContainer}>
            <Image style={{ width: 65, height: 65 }} source={require("@assets/shot.png")} />
            <Text style={styles.eachRecordFont}>샷</Text>
            <Text>60</Text>
          </View>
          <View style={styles.eachRecordContainer}>
            <Image style={{ width: 65, height: 65 }} source={require("@assets/milk.png")} />
            <Text style={styles.eachRecordFont}>우유</Text>
            <Text>
              20<Text style={styles.eachRecordElseFont}>/30</Text>
            </Text>
          </View>
          <View style={styles.eachRecordContainer}>
            <Image style={{ width: 65, height: 65 }} source={require("@assets/syrup.png")} />
            <Text style={styles.eachRecordFont}>시럽</Text>
            <Text>
              11<Text style={styles.eachRecordElseFont}>/30</Text>
            </Text>
          </View>
          <View style={styles.eachRecordContainer}>
            <Image style={{ width: 65, height: 65 }} source={require("@assets/cream.png")} />
            <Text style={styles.eachRecordFont}>크림</Text>
            <Text>
              2<Text style={styles.eachRecordElseFont}>/30</Text>
            </Text>
          </View>
        </View>
      </View>
      <FAB
        style={{ width: 52, height: 52 }}
        icon={{ name: "add", color: "white" }}
        placement="right"
        color="black"
        size="large"
      />
    </ScrollView>
  );
}
