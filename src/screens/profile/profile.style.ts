import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 17
  },
  info: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 30
  },
  profileImage: {
    width: 72,
    height: 72
  },
  user: {
    flexDirection: "row",
    marginBottom: -10
  },
  userName: {
    fontSize: 18
  },
  userNameUpdate: {
    position: "absolute",
    right: -10,
    top: 10
  },
  userMail: {
    fontSize: 16
  },
  records: {
    flexDirection: "row",
    justifyContent: "center",
    width: 400,
    marginBottom: 70
  },
  record: {
    alignItems: "center",
    marginLeft: 30
  },
  recordsTitle: {
    color: "#757474",
    fontSize: 14
  },
  recordFonts: {
    fontSize: 24
  },
  gradientButton: {
    width: 86,
    height: 28,
    fontSize: 11,
    marginTop: 10
  },
  catInCup: {
    width: 82,
    height: 82,
    marginTop: -13
  },
  config: {
    alignItems: "center"
  },
  configScripts: {
    fontSize: 16,
    marginBottom: -5
  },
  accountDeletion: {
    fontSize: 14,
    color: "#F15F5F",
    marginTop: 25
  },
  deleteButton: {
    width: 100,
    height: 30
  },
  buttonX: {
    width: 21,
    height: 21,
    marginLeft: 300,
    marginTop: 24
  },
  modalCatInCup: {
    width: 112,
    height: 112
  },
  pointFont: {
    fontSize: 12
  },
  pointImage: {
    width: 12,
    height: 12
  },
  modalButton: {
    width: 136,
    height: 48
  }
});

export default styles;
