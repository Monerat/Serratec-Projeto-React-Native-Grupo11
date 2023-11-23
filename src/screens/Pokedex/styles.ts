import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26326B", // Azul
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    color: "#fff", // Branco
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff", // Branco
    color: "#26326B", // Azul
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#E04A49", // Vermelho
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff", // Branco
    fontWeight: "bold",
  },
});
