import React, { ReactElement, useState } from "react";
import { View, Button } from "react-native";
import { firebaseApp } from "@services/firebaseApp";
import { addNormalCupRecord, addZeroCupRecord } from "@services/coffeeLog-service";
import { useState as HSUseState } from "@hookstate/core";
import { globalUserState } from "@stores/stores";
import { Calendar, RecordList } from "@Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { styles } from "./monthly-record.styles";

type NavigationProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "MonthlyRecord">;
};

// Props로 넘겨줘야 하는 부분
// 전역에서 객체 생성하면 prop로 넘겨줄 필요는 없을 지도
// 1) Date 가져오기.
// > Date에 날짜와 요일이 함께 있어야 하네...?
// > 커피 잔 수 가져오기

export default function MonthlyRecord({ navigation }: NavigationProps): ReactElement {
  const currentUserState = HSUseState(globalUserState);
  const userEmail = currentUserState.userEmail.get();
  const [shot, setShot] = useState(0);
  const [base, setBase] = useState("");
  const [option, setOption] = useState(["none"]);

  const handleButtonComplete = () => {
    const timestamp = new Date();
    addNormalCupRecord(userEmail, shot, base, option, timestamp);
  };

  const handleButtonZeroComplete = () => {
    const timestamp = new Date();
    addZeroCupRecord(userEmail, timestamp);
  };

  const handleButtonRecordDone = () => {
    const timestamp = new Date();
    //
  };

  return (
    <View style={styles.container}>
      <Button title="shot1" onPress={() => setShot(1)} />
      <Button title="shot2" onPress={() => setShot(2)} />
      <Button title="shot3" onPress={() => setShot(3)} />
      <Button title="baseWater" onPress={() => setBase("water")} />
      <Button title="baseMilk" onPress={() => setBase("milk")} />
      <Button title="optionCream" onPress={() => setOption([...option, "cream"])} />
      <Button title="optionSyrup" onPress={() => setOption([...option, "syrup"])} />
      <Button title="complete" onPress={handleButtonComplete} />

      <Button title="0잔 기록" onPress={handleButtonZeroComplete} />

      <Button title="오늘 마감" onPress={handleButtonRecordDone} />

      {/* <Calendar />
      <View style={styles.recordBackground}>
        <View style={styles.recordContainer}>
          <RecordList />
        </View>
      </View> */}
    </View>
  );
}
