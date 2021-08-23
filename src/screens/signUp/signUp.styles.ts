import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    marginTop: 40
  },
  // signUp 시작
  scrollView: {
    flex: 1,
    marginTop: 106
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
  },
  validationText: {
    fontSize: 12,
    lineHeight: 17.38,
    color: "#565656",
    marginTop: 4,
    marginBottom: 43
  },
  button: {
    width: 328,
    height: 48
  },
  // signUp 끝
  termsOfUseLink: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  termsOfUseLinkText: {
    marginTop: 24,
    fontSize: 14,
    lineHeight: 20,
    color: "#757474"
  }
});

export default styles;
