// components/BackgroundImageHome.tsx
import React from "react";
import { ImageBackground } from "react-native";
import styles from "./styles";
import backgroundImg from "../../assets/images/backgroundBatalha.png"

interface BackgroundImageBattleProps {
  children: React.ReactNode;
}

export const BackgroundImageBattle: React.FC<BackgroundImageBattleProps> = ({ children }) => (
  <ImageBackground
    source={backgroundImg}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);