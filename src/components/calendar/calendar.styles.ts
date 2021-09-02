import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 20
  },
  indexContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 27
  },
  indexIcon: {
    marginLeft: 10,
    marginRight: 5,
    width: 9,
    height: 4,
    borderRadius: 100
  },
  indexIconZero: {
    backgroundColor: "#76B5FF"
  },
  indexIconMoreThanOne: {
    backgroundColor: "#8E6655"
  },
  indexIconText: {
    fontSize: 10,
    lineHeight: 14,
    color: "#6A6A6A"
  }
});

export default styles;
