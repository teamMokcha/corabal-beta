import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  indexContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 25,
    alignItems: "center"
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
