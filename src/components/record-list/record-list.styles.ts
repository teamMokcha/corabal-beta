import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center"
  },
  dateContainer: {
    alignItems: "center"
  },
  dateTextNumber: {
    marginTop: 19,
    fontSize: 20,
    lineHeight: 23,
    textAlign: "center",
    color: "#000000"
  },
  dateTextWord: {
    marginTop: 0,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    color: "#000000"
  },
  separatingLine: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    height: 48
  },
  cupsContainer: {
    flexDirection: "row",
    marginLeft: 12
  },
  cupImage: {
    marginLeft: 8
  },
  buttonMore: {
    marginLeft: "auto",
    marginRight: 16
  }
});

export default styles;
