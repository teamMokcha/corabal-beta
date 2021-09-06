import React, { ReactElement, useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ButtonGradient, MainHeader, Text } from "@Components";
import styles from "./main.style";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationParams } from "@config/navigator";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import CustomCarousel from "./carousel";
import * as Progress from "react-native-progress";
import CircleProgress from "./circleProgress";
import Goal from "../goal/goal";
import { db, firebaseApp } from "@services/firebaseApp";
import { useState as HSUseState } from "@hookstate/core";
import { globalGoalState } from "@stores/stores";

type NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParams, "Main">;
};
export default function Main({ navigation }: NavigationProps): ReactElement {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowingGoal, setIsShowingGoal] = useState(false);
  const currentUserEmail = firebaseApp.auth().currentUser?.email?.toString();
  const userRef = db.collection("users").doc(currentUserEmail);
  const currentGoalState = HSUseState(globalGoalState);
  const goal = currentGoalState.goal.get();
  const [goalFromFirebase, setGoalFromFirebase] = useState(0);
  // 유저의 DB에서 목표 가져와서 보여주기
  useEffect(() => {
    async function getGoal() {
      await userRef
        .get()
        .then(doc => {
          if (doc.exists) {
            setGoalFromFirebase(doc.get("goal"));
          } else console.log("No such doc.");
        })
        .catch(error => console.error(error));
    }
    getGoal();
  }, [goal]);

  return (
    <>
      <MainHeader />
      {/* Floating Button */}
      <View style={styles.floatingBtnContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Record")}>
          <Image source={require("@assets/btn_record.png")} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.aimContainer}>
          <TouchableOpacity
            style={styles.aimBtnContainer}
            activeOpacity={0.5}
            onPress={() => setIsShowingGoal(true)}
          >
            {/* 목표 1일 {}잔 */}
            <Text style={styles.aim}>
              목표 <Text style={styles.pointFont}>1</Text>일{" "}
              <Text style={styles.pointFont}>{goalFromFirebase}</Text>잔
            </Text>
            <Image style={styles.aimNextBtn} source={require("@assets/btn_next.png")} />
          </TouchableOpacity>
          <Goal isShowingGoal={isShowingGoal} setIsShowingGoal={setIsShowingGoal} />
          <View style={styles.mainContainer}>
            <Image style={styles.mainCatImg} source={require("@assets/main-cat.png")} />
            <View style={{ flex: 1 }}>
              <Text style={styles.statusTitleFont}>이번달 목표 성공일</Text>
              <Progress.Bar
                progress={0.5} // console.log((16/31).toFixed(1)) -> 0.5
                width={210}
                color="#76A3FF"
                unfilledColor="#DDDDDD"
                borderWidth={0}
              />
              <Text style={styles.statusByMonthFont}>
                <Text style={styles.pointFont}>16</Text>/31
              </Text>
              <Text style={styles.statusTitleFont}>이번달 기록</Text>
              <Progress.Bar
                progress={0.5}
                width={210}
                color="#76A3FF"
                unfilledColor="#DDDDDD"
                borderWidth={0}
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
          <CircleProgress />
        </View>
        <CustomCarousel />
      </ScrollView>
    </>
  );
}
