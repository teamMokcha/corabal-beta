import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 114,
    alignItems: "center",
    justifyContent: "center"
  },
  inputLabel: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 23.17,
    color: "#000000"
  },
  inputBox: {
    paddingBottom: 8,
    width: 312,
    borderBottomWidth: 1,
    borderColor: "#000000"
    // only in web - outline: "none"
  },
  validationText: {
    fontSize: 12,
    lineHeight: 17.38,
    color: "#F15F5F",
    marginTop: 4,
    marginBottom: 0
  },
  checkTermsContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    marginTop: 21,
    marginLeft: 23,
    width: 325
  },
  checkTermsButton: {
    marginTop: 2,
    marginBottom: 2,
    marginRight: 4,
    alignContent: "center",
    justifyContent: "center",
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 100
  },
  checkTermsButtonTrue: {
    backgroundColor: "#76B5FF",
    borderColor: "white"
  },
  checkTermsButtonFalse: {
    borderColor: "#9D9D9D"
  },
  checkTermsText: {
    color: "#565656",
    fontSize: 12,
    lineHeight: 17
  },
  button: {
    marginTop: 43,
    width: 328,
    height: 48
  }
});

export default styles;
