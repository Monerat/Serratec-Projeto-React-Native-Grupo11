import React from "react";
import { Image } from "react-native";
import styles from "./styles";
import cardBack from "../../assets/images/cardBack.png"

export const CardBack = () => (
  <Image
    source={cardBack}
    style={styles.image}
  >
  </Image>
);