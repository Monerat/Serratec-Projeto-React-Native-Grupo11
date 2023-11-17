// components/BackgroundImage.tsx
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";
import backgroundImg from "../../assets/images/backgroundForest.png"

interface BackgroundImageProps {
  children: React.ReactNode;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => (
  <ImageBackground
    source={backgroundImg}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);