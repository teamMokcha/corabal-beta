import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  info: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  user: {
    flexDirection: "row"
  },
  userName: {
    fontSize: 18
  },
  userMail: {
    fontSize: 16
  },
  records: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  record: {
    alignItems: "center"
  },
  recordTitle: {
    fontSize: 16
  },
  recordContent: {
    fontSize: 24
  },
  config: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  configScripts: {
    fontSize: 16
  },
  accountDeletion: {
    fontSize: 14,
    color: "#F15F5F"
  }
});

export default styles;
