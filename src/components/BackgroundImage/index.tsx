
import React from "react";
import { ImageBackground, ImageSourcePropType } from "react-native";
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
import backgroundEletric from "../../assets/images/backgroundEletric.png"
import backgroundGround from "../../assets/images/backgroundGround.png"
import backgroundPsychic from "../../assets/images/backgroundPsychic.jpg"
import backgroundIce from "../../assets/images/backgroundIce.jpg"
import backgroundGhost from "../../assets/images/backgroundGhost.jpg"
import backgroundSteel from "../../assets/images/backgroundSteel.png"
import backgroundDragon from "../../assets/images/backgroundDragon.jpg"
import backgroundDark from "../../assets/images/backgroundDark.png"
import backgroundFairy from "../../assets/images/backgroundFairy.png"

interface BackgroundImageProps {
  children: React.ReactNode;
  pokemonType: string;
}

const switchBackgroundImg = (pokemonType?: string) => {
  const typeImg:Record<string,ImageSourcePropType> = {
    normal: backgroundNormal,
    fire: backgroundFire,
    water: backgroundWater,
    grass: backgroundGrass,
    flying: backgroundFlying,
    fighting: backgroundFighting,
    poison: backgroundPoison,
    electric: backgroundEletric,
    ground: backgroundGround,
    rock: backgroundRock,
    psychic: backgroundPsychic,
    ice: backgroundIce,
    bug: backgroundForest,
    ghost: backgroundGhost,
    steel: backgroundSteel,
    dragon: backgroundDragon,
    dark: backgroundDark,
    fairy: backgroundFairy,
  }
  return typeImg[pokemonType??''] ?? backgroundNormal;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, pokemonType }) => (
  
  <ImageBackground
    source={switchBackgroundImg(pokemonType)}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);