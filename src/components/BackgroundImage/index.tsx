// components/BackgroundImage.tsx
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";
import backgroundForest from "../../assets/images/backgroundForest.png"
import backgroundNormal from "../../assets/images/backgroundNormal.jpg"
import backgroundFire from "../../assets/images/backgroundFire2.jpg"
import backgroundWater from "../../assets/images/backgroundWater.png"
import backgroundGrass from "../../assets/images/backgroundGrass.png"
import backgroundFlying from "../../assets/images/backgroundFlying.jpg"
import backgroundFighting from "../../assets/images/backgroundFighter.png"
import backgroundPoison from "../../assets/images/backgroundPoison.png"
import backgroundRock from "../../assets/images/backgroundRock.png"
// import backgroundEletric from "../../assets/images"
// import backgroundGround from "../../assets/images"
// import backgroundPsychic from "../../assets/images"
// import backgroundIce from "../../assets/images"
// import backgroundGhost from "../../assets/images"
// import backgroundSteel from "../../assets/images"
// import backgroundDragon from "../../assets/images"
// import backgroundDark from "../../assets/images"
// import backgroundFairy from "../../assets/images"

interface BackgroundImageProps {
  children: React.ReactNode;
  pokemonType: string;
}

const switchBackgroundImg = (pokemonType?: string) => {
  
  switch (pokemonType) {
    case "normal":
      return backgroundNormal;
    case "fire":
      return backgroundFire;
    case "water":
      return backgroundWater;
    case "grass":
      return backgroundGrass;
    case "flying":
      return backgroundFlying;
    case "fighting":
      return backgroundFighting;
    case "poison":
      return backgroundPoison;
    case "electric":
      return "#f8d030";
    case "ground":
      return "#e0c068";
    case "rock":
      return backgroundRock;
    case "psychic":
      return "#f85888";
    case "ice":
      return "#98d8d8";
    case "bug":
      return backgroundForest;
    case "ghost":
      return "#705898";
    case "steel":
      return "#b8b8d0";
    case "dragon":
      return "#7038f8";
    case "dark":
      return "#705848";
    case "fairy":
      return "#ee99ac";
    default:
      return "#ffffff";
  }
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, pokemonType }) => (
  
  <ImageBackground
    source={switchBackgroundImg(pokemonType)}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);