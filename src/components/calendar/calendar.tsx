import React, { ReactElement } from "react";
import { View } from "react-native";
import { Calendar as RNCalendar, Agenda, LocaleConfig } from "react-native-calendars";
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
    <View>
      <RNCalendar
        style={{}}
        theme={{
          arrowColor: "red",
          "stylesheet.calendar.header": {
            month: { color: "red" },
            week: {
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between"
            }
          }
        }}
        monthFormat={"M월"}
        enableSwipeMonths={true}
      />
    </View>
  );
}
