import React, { useState, useEffect, useCallback } from 'react'
import {  Pokemon } from "../../services/api";
import { View, Image, Text, } from 'react-native';
import { styles } from "../PokemonCard/styles"
import { BackgroundImage } from '../BackgroundImage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

interface PokemonCardProps {
  item: Pokemon;
}


export const PokemonCard = ({ item }: PokemonCardProps) => {
  const { id, name, sprites, stats, types } = item;
  
  const [fontsLoaded, fontError] = useFonts({
    'gillMedium': require('../../assets/fonts/GillSansMedium.otf'),
    'gillBold': require('../../assets/fonts/GillSansCondensedBold.otf'),
  });

  const corDoCardPeloType = (type?: string): string => {
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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: corDoCardPeloType(types[0].type.name) }]}>
      <View style={styles.header} onLayout={onLayoutRootView}>
        <Text style={styles.textPokemonName}>{name}</Text>
        <Text style={styles.textPokemonHp}>{stats[0].stat.name}</Text>
        <Text style={styles.textPokemonName}>{stats[0].base_stat}</Text>
        <Text style={styles.textPokemonType}>{types[0].type.name}</Text>
      </View>
      <View style={styles.containerPokemon}>
        <BackgroundImage>
          <Image source={{ uri: sprites.other["official-artwork"].front_default }} style={styles.imgPokemon} />
        </BackgroundImage>
      </View>
      <View style={styles.containerHabilidades}>
        <View style={styles.containerSkill}>
          <Text style={styles.textHabilidades}>Força</Text>
          <Text style={styles.valor}>Valor</Text>
        </View>
        <View style={styles.containerSkill}>
          <Text style={styles.textHabilidades}>Ataque</Text>
          <Text style={styles.valor}>Valor</Text>
        </View>
        <View style={styles.containerSkill}>
          <Text style={styles.textHabilidades}>Defesa</Text>
          <Text style={styles.valor}>Valor</Text>
        </View>
        <View style={styles.containerSkill}>
          <Text style={styles.textHabilidades}>Altura</Text>
          <Text style={styles.valor}>Valor</Text>
        </View>
        <View style={styles.containerSkill}>
          <Text style={styles.textHabilidades}>Agilidades</Text>
          <Text style={styles.valor}>Valor</Text>
        </View>
      </View>
    </View>
  )
}