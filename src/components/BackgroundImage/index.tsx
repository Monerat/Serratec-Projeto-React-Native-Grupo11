// components/BackgroundImage.tsx
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";
import backgroundImg from "../../assets/images/backgroundImage.jpg"

interface BackgroundImageProps {
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => (
  <ImageBackground
    source={backgroundImg}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);

export default BackgroundImage;
