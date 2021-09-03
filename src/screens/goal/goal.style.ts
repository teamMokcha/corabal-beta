import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 24,
    marginLeft: 24,
    marginTop: 10
  },
  headerFont: {
    fontSize: 20
  },
  buttonX: {
    width: 21,
    height: 21
  },
  bodyFont: {
    fontSize: 15
  },
  aimWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  aim: {
    fontSize: 24
  },
  aimInput: {
    fontSize: 24,
    marginRight: 6
  },
  caution: {
    fontSize: 13,
    color: "#F15F5F"
  },
  complete: {
    width: 294,
    height: 48
  },
  numberPicker: {
    fontSize: 15
  }
});

export default styles;
