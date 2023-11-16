import React, { useState } from "react";
import { Image, View, } from "react-native";
import styles from "./styles";
import BackgroundImage from "../../components/BackgroundImage";
import { Button } from "react-native-paper";
import { getPokemon, Pokemon } from "../../services/api";


const HomeScreen = () => {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function listMagicItemList() {
    getPokemon(4)
      .then(response => {
        setPokemon(response.data);
        console.log(pokemon?.stats[0].stat.name);
      })
      .catch(error => {
        console.log(error.data);
      }).finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Button onPress={listMagicItemList}>pesquisar</Button>
      </View>
      <View>
        <Image source={{ uri: pokemon?.sprites.other["official-artwork"].front_default }} style={{ width: "50%", height: "50%", resizeMode: "contain" }} />
      </View>
    </BackgroundImage>
  );
};

export default HomeScreen;
