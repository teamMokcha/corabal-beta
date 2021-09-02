import React from "react";
import { ReactElement } from "react";
import { View } from "react-native";
import { Calendar, RecordList } from "@Components";
import { styles } from "./monthly-record.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "MonthlyRecord">;
};

// Props로 넘겨줘야 하는 부분
// 전역에서 객체 생성하면 prop로 넘겨줄 필요는 없을 지도
// 1) Date 가져오기.
// > Date에 날짜와 요일이 함께 있어야 하네...?
// > 커피 잔 수 가져오기
// 점 있는 부분만 터치 가능하도록 하기

export default function MonthlyRecord({ navigation }: NavigationProps): ReactElement {
  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.recordBackground}>
        <View style={styles.recordContainer}>
          <RecordList />
        </View>
      </View>
    </View>
  );
}
