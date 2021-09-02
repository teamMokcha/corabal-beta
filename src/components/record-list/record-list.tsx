import React, { ReactElement } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import Text from "../text/text";
import styles from "./record-list.styles";

// calender 양 옆에 마진 값을 줘야 함... 헤더 스타일 고치고, 어떻게 하면 마킹할 수 있는지 알아보기

export default function RecordList(): ReactElement {
  return (
    <FlatList
      data={[
        {
          date: [28, "월요일"],
          normalCupRecords: [
            { shot: 1, base: "water", option: "none", timestamp: "210901-16:50:33" }
          ]
        },
        {
          date: [26, "토요일"],
          normalCupRecords: [
            { shot: 1, base: "water", option: "none", timestamp: "210901-16:50:33" },
            { shot: 1, base: "water", option: "none", timestamp: "210901-16:50:33" }
          ]
        }
      ]}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <Text weight="700" style={styles.dateTextNumber}>
              {item.date[0]}
            </Text>
            <Text weight="400" style={styles.dateTextWord}>
              {item.date[1]}
            </Text>
          </View>
          <View style={styles.separatingLine} />
          <View style={styles.cupsContainer}>
            <Image style={styles.cupImage} source={require("@assets/icon_cup_basic_empty.png")} />
          </View>
          <TouchableOpacity style={styles.buttonMore}>
            <Image source={require("@assets/btn_more.png")} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
