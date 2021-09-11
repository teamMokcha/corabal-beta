import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 201,
    marginBottom: 187,
    marginLeft: 24,
    marginRight: 24
  },
  closeButtonContainer: {
    alignItems: "flex-end",
    marginTop: 24,
    marginBottom: 1,
    marginRight: 16
  },
  closeButtonImage: {
    resizeMode: "contain",
    maxWidth: 21,
    maxHeight: 21,
    marginBottom: 0
  },
  modalBodyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  catInCupImage: {
    marginTop: 0,
    marginBottom: 18,
    paddingLeft: 100,
    paddingRight: 100,
    resizeMode: "contain",
    maxWidth: 112,
    maxHeight: 112
  },
  errorText: {
    color: "#000000",
    fontSize: 14,
    lineHeight: 20
  },
  modalFooterContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 16,
    marginRight: 16
  }
});
