import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  aimContainer: {
    marginTop: 12,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 28
  },
  aimBtnContainer: {
    flexDirection: "row",
    marginRight: 170,
    alignItems: "center"
  },
  aim: {
    fontSize: 24
  },
  pointFont: {
    fontWeight: "bold",
    color: "#2B8CFF"
  },
  aimNextBtn: {
    marginLeft: 8,
    width: 8,
    height: 14
  },
  mainContainer: {
    flexDirection: "row"
  },
  mainCatImg: {
    width: 128,
    height: 128,
    marginRight: 28
  },
  statusTitleFont: {
    fontSize: 13
  },
  statusByMonthFont: {
    fontSize: 11,
    fontWeight: "400",
    color: "#757474"
  },
  myPointContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  myPointImg: {
    width: 12,
    height: 12,
    marginRight: 4
  },
  myPointFont: {
    fontSize: 11
  },
  todayContainer: {
    margin: 24
  },
  todayFontWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  todayFont: {
    fontSize: 18,
    fontWeight: "500"
  },
  cupUpdatingBtn: {
    fontSize: 14,
    fontWeight: "400",
    color: "#878787"
  },
  emptyCupContainer: {
    alignItems: "center"
  },
  emptyCupImg: {
    width: 24,
    height: 24
  },
  emptyCupSaying: {
    fontSize: 10,
    color: "#878787",
    marginBottom: -15
  },
  emptyCupRecordingBtn: {
    marginTop: 20,
    height: 50
  },
  recordedCupContainer: {
    flexDirection: "row",
    marginBottom: 24,
    marginTop: 24
  },
  recordedCupImg: {
    width: 43,
    height: 28,
    marginRight: 13
  },
  recordingFinishBtn: {
    height: 50
  },
  recordContainer: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 40
  },
  thisMonthFont: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: -30
  },
  totalCupsFont: {
    fontSize: 24
  },
  floatingBtnContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 24,
    alignSelf: "flex-end",
    marginBottom: 48,
    zIndex: 200
  }
});

export default styles;
