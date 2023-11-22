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
    water: "#6890f0",
    grass:"#78c850",
    flying:"#a890f0",
    fighting:"#c03028",
    poison:"#a040a0",
    electric:"#f8d030",
    ground:"#e0c068",
    rock:"#b8a038",
    psychic:"#f85888",
    ice:"#98d8d8",
    bug:"#a8b820",
    ghost:"#705898",
    steel:"#b8b8d0",
    dragon:"#7038f8",
    dark:"#705848",
    fairy:"#ee99ac",
  }

  return colors[type??''] ?? '#ffff'
}

export const CorCardPorType: React.FC<CorCardPorTypeProps> = ({ children, pokemonType }) => (

  <View
    style={[styles.container, { backgroundColor: corDoCardPeloType(pokemonType) }]}
  >
    {children}
  </View>
);