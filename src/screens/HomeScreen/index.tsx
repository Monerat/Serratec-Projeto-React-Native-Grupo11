import React from "react";
import { Image, View, } from "react-native";
import styles from "./styles";
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import pokeBall from "../../assets/images/pokeballAnimation.gif";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";



export const HomeScreen = () => {

  return (
    <BackgroundImageHome>
      <View style={styles.container}>
        <Image source={pokemonLogo} style={styles.imageLogo} />
      </View>
      <View style={styles.pokeballContainer}>
        <Image source={pokeBall} style={styles.imagePokeball} />
      </View>
    </BackgroundImageHome>
  );
};
