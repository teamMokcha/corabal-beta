import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    flex: 1,
    marginTop: 66
    // marginLeft: 16,
    // marginRight: 12
  },
  inputContainer: {
    paddingRight: 8,
    paddingLeft: 8
  },
  inputLabel: {
    fontSize: 16,
    lineHeight: 23.17,
    color: "#000000"
  },
  inputText: {
    alignItems: "center",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#000000"
  }
});

export default styles;
