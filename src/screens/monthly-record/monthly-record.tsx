import React from "react";
import { ReactElement } from "react";
import { View, Text } from "react-native";
import { Calendar } from "@Components";
import { styles } from "./monthly-record.styles";

export default function MonthlyRecord(): ReactElement {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
}
