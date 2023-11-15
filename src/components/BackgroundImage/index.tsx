// components/BackgroundImage.tsx
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";

interface BackgroundImageProps {
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => (
  <ImageBackground
    source={require("../../assets/images/backgroundImage.png")}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);

export default BackgroundImage;
