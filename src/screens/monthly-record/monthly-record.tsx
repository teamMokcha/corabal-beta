import React from "react";
import { ReactElement } from "react";
import { View, Text } from "react-native";
import { Calender } from "@Components";
import { styles } from "./monthly-record.styles";

export default function MonthlyRecord(): ReactElement {
  return (
    <View style={styles.container}>
      <Calender />
    </View>
  );
}
