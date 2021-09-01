import React, { ReactElement, useCallback, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "@Components";
interface circleProgressProps {
  name: string;
  source: any;
  height: string;
  part: number;
  total?: number;
}

const example = [
  {
    name: "샷",
    source: require("../../../assets/shot.png"),
    height: "100%",
    part: 30
  },
  {
    name: "우유",
    source: require("../../../assets/milk.png"),
    height: "66%", // 우유: 20(마심)/30(전체 커피) * 100 = 66.66667...
    part: 20,
    total: 30
  },
  {
    name: "시럽",
    source: require("../../../assets/syrup.png"),
    height: "36%",
    part: 11,
    total: 30
  },
  {
    name: "크림",
    source: require("../../../assets/cream.png"),
    height: "6%",
    part: 2,
    total: 30
  }
];

const CircleProgress = (): JSX.Element => {
  const [records, setRecords] = useState<circleProgressProps[]>(example);
  return (
    <View style={styles.container}>
      {records.map(record => {
        const source = record.source;
        return (
          <View key={record.source} style={styles.eachRecordContainer}>
            <View style={styles.circle}>
              <View style={[styles.circleFill, { height: record.height }]} />
              <View style={styles.centerContainer}>
                <Image source={source} />
              </View>
            </View>
            <Text style={styles.recordName}>{record.name}</Text>
            <Text style={styles.recordPart}>
              {record.part}
              {record.total && <Text style={styles.recordTotal}>/{record.total}</Text>}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default CircleProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  eachRecordContainer: {
    alignItems: "center"
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    overflow: "hidden",
    backgroundColor: "#DDDDDD"
  },
  circleFill: {
    backgroundColor: "#76B5FF",
    width: "100%",
    bottom: 0,
    position: "absolute"
  },
  centerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  recordName: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 22
  },
  recordPart: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 21.72
  },
  recordTotal: {
    color: "#C4C4C4"
  }
});
