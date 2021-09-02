import React, { ReactElement } from "react";
import { View } from "react-native";
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";
import Text from "../text/text";
import styles from "./calendar.styles";

// 오른쪽 화살을 표시하되, 그 화살이 아래를 향하고 있으면 됨. custom arrow를 만들어서 보여주기
// custom arrow는 드롭박스를 보여주나..?

// 특정 날짜 클릭 > 모달 등장 >

LocaleConfig.locales["KoreanCalendar"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘"
};
LocaleConfig.defaultLocale = "KoreanCalendar";

export default function Calendar(): ReactElement {
  return (
    <View style={styles.container}>
      <RNCalendar
        style={{ paddingLeft: 27, paddingRight: 25 }}
        theme={{
          arrowColor: "black",
          "stylesheet.calendar.header": {
            month: { color: "red", fontSize: 24, lineHeight: 35 },
            week: {
              marginTop: 36,
              flexDirection: "row",
              justifyContent: "space-between"
            }
          }
        }}
        monthFormat={"M월"}
        enableSwipeMonths={true}
      />
      <View style={styles.indexContainer}>
        <View style={[styles.indexIcon, styles.indexIconZero]} />
        <Text style={styles.indexIconText} weight="400">
          {"0잔"}
        </Text>
        <View style={[styles.indexIcon, styles.indexIconMoreThanOne]} />
        <Text style={styles.indexIconText} weight="400">
          {"1잔 이상"}
        </Text>
      </View>
    </View>
  );
}
