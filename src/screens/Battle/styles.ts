import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  oponentDeckContainer: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    height: "100%",
    width: "20%",
    marginRight: 10,
    paddingHorizontal: 7,
  },
  cardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  fieldContainer: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
  },
  centerFieldContainer: {
    height: "50%",
    width: "100%",
  },
  myDeckContainer: {
    height: "15%",
    width: "100%",
  },
  messageContainer: {
    alignItems: "center",
  },
  resultMessage: {
    color: "#3560ad",
    fontSize: 90,
    textShadowColor: "#FDB542",
    textShadowOffset: { width: 15, height: 15 },
    textShadowRadius: 1,
    textTransform: "capitalize",
    overflow: "hidden",
  },
  restartButton: {
    backgroundColor: '#3560ad',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  restartButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
