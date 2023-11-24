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
    borderRadius: 10, // Adicione borda arredondada, se desejar
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
});
