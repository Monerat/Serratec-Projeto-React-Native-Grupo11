// components/BackgroundImage.tsx
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface CorCardPorTypeProps {
  children: React.ReactNode;
  pokemonType: string;
}

const corDoCardPeloType = (type?: string): string => {
  const colors:Record<string,string> = {
    normal: "#a8a878",
    fire: "#ff0000",
  }

  return colors[type??''] ?? '#ffff'

  switch (type) {
    case "normal":
      return "#a8a878";
    case "fire":
      return "#ff0000";
    case "water":
      return "#6890f0";
    case "grass":
      return "#78c850";
    case "flying":
      return "#a890f0";
    case "fighting":
      return "#c03028";
    case "poison":
      return "#a040a0";
    case "electric":
      return "#f8d030";
    case "ground":
      return "#e0c068";
    case "rock":
      return "#b8a038";
    case "psychic":
      return "#f85888";
    case "ice":
      return "#98d8d8";
    case "bug":
      return "#a8b820";
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
};

export const CorCardPorType: React.FC<CorCardPorTypeProps> = ({ children, pokemonType }) => (

  <View
    style={[styles.container, { backgroundColor: corDoCardPeloType(pokemonType) }]}
  >
    {children}
  </View>
);