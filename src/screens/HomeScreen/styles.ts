import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    image: {
      width: 250,
      height: 350,
      marginBottom: 50,
      resizeMode: 'contain'
    },
    searchBar: {
      width: "100%",
      marginBottom: 10,
    },
    searchButton: {
      marginTop: 10,
    },
  });

export default styles;