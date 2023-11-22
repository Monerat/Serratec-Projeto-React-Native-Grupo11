// components/BackgroundImageHome.tsx
import React from "react";
import { ImageBackground } from "react-native";
import styles from "./styles";
import backgroundImg from "../../assets/images/Home.gif"

interface BackgroundImageHomeProps {
  children: React.ReactNode;
}

export const BackgroundImageHome: React.FC<BackgroundImageHomeProps> = ({ children }) => (
  <ImageBackground
    source={backgroundImg}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);