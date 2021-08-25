import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 24
  },
  profile: {
    flexDirection: "row"
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 8
  },
  profileName: {
    fontSize: 18,
    marginTop: -15,
    marginBottom: -22
  },
  profileBoldName: {
    fontWeight: "bold"
  },
  profilePointFont: {
    fontSize: 11
  },
  point: {
    width: 12,
    height: 12
  },
  watchingAd: {
    width: 100,
    height: 40
  },
  cupWrapper: {
    alignItems: "center"
  },
  emptyCup: {
    width: 72,
    height: 72
  }
});

export default styles;
