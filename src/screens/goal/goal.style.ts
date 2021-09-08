import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 26,
    marginRight: 24,
    marginBottom: 24
  },
  headerFontContainer: {
    marginRight: 94
  },
  settingGoalFont: {
    fontSize: 20,
    lineHeight: 29,
    marginBottom: 8
  },
  settingGoalDescriptionFont: {
    fontSize: 15,
    lineHeight: 21.72
  },
  bodyContainer: {
    marginLeft: 26,
    marginRight: 254
  },
  radioBtnContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  radioBtnFont: {
    color: "#757474",
    fontWeight: "400"
  },
  confirmBtn: {
    width: 294,
    height: 48
  }
});

export default styles;
