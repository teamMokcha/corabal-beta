import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid"
  },
  header: {
    marginLeft: 20
  },
  text: {
    fontSize: 20
  },
  body: {
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30
  }
});

export default styles;
