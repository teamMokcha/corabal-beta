import React, { ReactElement } from "react";
import { View } from "react-native";
import { Calendar as RNCalendar, Agenda, LocaleConfig } from "react-native-calendars";
import styles from "./calendar.styles";

LocaleConfig.locales["KoreanCalendar"] = {
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
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
