import React, { ReactElement } from "react";
import { View } from "react-native";
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";
import { KR_MONTH_NAMES, KR_DAY_NAMES } from "./date_constants";
import Text from "../text/text";
import styles from "./calendar.styles";

// 1. arrow는 커스텀한 컴포넌트로 아예 교체를 해야함// custom arrow는 드롭박스를 보여주나..?
// 특정 날짜 클릭 > 모달 등장 >
// 2. render header로 커스텀한 달을 보여줘야 함
// 3. 날짜 클릭 시 어떤 걸 보여줄지는 콘솔에.. 근데 뭔가를 보여주는 게 맞나.?
// 4. 날짜 표시.. 어렵겠지만 해보자. 시작일과 끝일을 구분해야 함

LocaleConfig.locales["KoreanCalendar"] = {
  monthNames: KR_MONTH_NAMES,
  monthNamesShort: KR_MONTH_NAMES,
  dayNames: KR_DAY_NAMES,
  dayNamesShort: KR_DAY_NAMES,
  today: "오늘"
};
LocaleConfig.defaultLocale = "KoreanCalendar";

export default function Calendar(): ReactElement {
  return (
    <View style={styles.container}>
      <RNCalendar
        style={{ paddingLeft: 27, paddingRight: 25 }}
        monthFormat={"M월"}
        enableSwipeMonths={true}
        hideExtraDays={true}
        // hideArrows={true}
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
