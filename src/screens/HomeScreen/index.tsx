import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar, Button } from "react-native-paper";
import { getDigimonDetails } from "../../services/api";
import styles from "./styles";
import BackgroundImage from "../../components/BackgroundImage";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  DigimonScreen: { idOrName: number | string }
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const response = await getDigimonDetails(searchQuery);
    navigation.navigate("DigimonScreen", { idOrName: response.data.id });
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/wizardmon.png")}
          style={styles.image}
        />
        <Searchbar
          placeholder="Pesquisar Digimon"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={styles.searchBar}
        />
        <Button
          mode="contained"
          onPress={handleSearch}
          style={styles.searchButton}
        >
          Pesquisar
        </Button>
      </View>
    </BackgroundImage>
  );
};

export default HomeScreen;
