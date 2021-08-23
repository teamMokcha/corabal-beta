import { StyleSheet } from "react-native";

const authLayout = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 106
  },
  inputContainer: {
    marginTop: 114,
    paddingRight: 8,
    paddingLeft: 8
  },
  inputLabel: {
    fontSize: 16,
    lineHeight: 23.17,
    color: "#000000"
  },
  validationText: {
    fontSize: 12,
    lineHeight: 17.38,
    color: "#565656",
    marginTop: 4,
    marginBottom: 0
  },
  button: {
    marginTop: 43,
    width: 328,
    height: 48
  }
});

export default authLayout;
