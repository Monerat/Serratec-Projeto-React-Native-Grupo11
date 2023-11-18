import React, { useState, useEffect, useCallback } from 'react'
import {  Pokemon } from "../../services/api";
import { View, Image, Text, } from 'react-native';
import { styles } from "../PokemonCard/styles"
import { BackgroundImage } from '../BackgroundImage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import elementFire from '../../assets/images/ElementFire.png'
import elementWater from '../../assets/images/ElementWater.png'
import elementBug from '../../assets/images/ElementBug.png'
import elementDark from '../../assets/images/ElementDark.png'
import elementDragon from '../../assets/images/ElementDragon.png'
import elementEletric from '../../assets/images/ElementEletric.png'
import elementFairy from '../../assets/images/ElementFary.png'
import elementFight from '../../assets/images/ElementFight.png'
import elementFly from '../../assets/images/ElementFlying.png'
import elementGhost from '../../assets/images/ElementGhost.png'
import elementGrass from '../../assets/images/ElementGrass.png'
import elementGround from '../../assets/images/ElementGround.png'
import elementIce from '../../assets/images/ElementIce.png'
import elementSteel from '../../assets/images/ElementMetal.png'
import elementNormal from '../../assets/images/ElementNormal.png'
import elementPoison from '../../assets/images/ElementPoison.png'
import elementPsychic from '../../assets/images/ElementPsychic.png'
import elementRock from '../../assets/images/ElementRock.png'
import elementToxic from '../../assets/images/ElementToxic.png'

interface PokemonCardProps {
  item: Pokemon;
}

export const PokemonCard = ({ item }: PokemonCardProps) => {
  const { id, name, sprites, stats, types } = item;
  
  const [fontsLoaded] = useFonts({
    'gillMedium': require('../../assets/fonts/GillSansMedium.otf'),
    'gillBold': require('../../assets/fonts/GillSansCondensedBold.otf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }

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
  
  const pokemonType = ({types}) => {
    const backgroundImg = imageDoCardPeloType(types[0].type.name)
  
  
  const barraType = (type?: string): string => {
    switch (type) {
      case "normal":
        return elementNormal;
      case "fire":
        return elementFire;
      case "water":
        return elementWater;
      case "grass":
        return elementGrass;
      case "flying":
        return elementFly;
      case "fighting":
        return elementFight;
      case "poison":
        return elementPoison;
      case "electric":
        return elementEletric;
      case "ground":
        return elementWater;
      case "rock":
        return elementRock;
      case "psychic":
        return elementPsychic;
      case "ice":
        return elementIce;
      case "bug":
        return elementBug;
      case "ghost":
        return elementGhost;
      case "steel":
        return elementSteel;
      case "dragon":
        return elementDragon;
      case "dark":
        return elementDark;
      case "fairy":
        return elementFairy;
      default:
        return elementNormal
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: corDoCardPeloType(types[0].type.name) }]}>
      <View style={styles.header}>
        <Text style={[styles.textPokemonName, {fontFamily: 'gillBold'}]}>{name}</Text>
        <View style={styles.containerHp}>
          <Text style={[styles.textPokemonHp, {fontFamily: 'gillBold'}]}>{stats[0].stat.name}</Text>
          <Text style={[styles.textPokemonNumber, {fontFamily: 'gillBold'}]}>{stats[0].base_stat}</Text>
        </View>
      </View>

      <View style={styles.containerPokemon}>
        <BackgroundImage>
          <Image source={{ uri: sprites.other["official-artwork"].front_default }} style={styles.imgPokemon} />
        </BackgroundImage>
      </View>

      <View style={styles.containerHabilidades}>
        
        <View style={styles.containerSkill}>
          <View style={styles.containerText}>
            <MaterialCommunityIcons name="sword" size={24} color="black" />
            <Text style={[styles.textHabilidades, {fontFamily: 'gillBold'}]}>Ataque</Text>
          </View>
          <Text style={[styles.valor, {fontFamily: 'gillMedium'}]}>{stats[1].base_stat}</Text>
        </View>
        
        <View style={styles.containerSkill}>
          <View style={styles.containerText}>
            <MaterialIcons name="shield" size={24} color="black" />
            <Text style={[styles.textHabilidades, {fontFamily: 'gillBold'}]}>Defesa</Text>
          </View>
          <Text style={[styles.valor, {fontFamily: 'gillMedium'}]}>{stats[2].base_stat}</Text>
        </View>

        <View style={styles.containerSkill}>
          <View style={styles.containerText}>
            <FontAwesome5 name="firefox" size={24} color="black" />
            <Text  style={[styles.textHabilidades, {fontFamily: 'gillBold'}]}>Ataque Especial</Text>
          </View>
          <Text style={[styles.valor, {fontFamily: 'gillMedium'}]}>{stats[3].base_stat}</Text>
        </View>

        <View style={styles.containerSkill}>
          <View style={styles.containerText}>
            <MaterialCommunityIcons name="shield-sun" size={24} color="black" />
            <Text style={[styles.textHabilidades, {fontFamily: 'gillBold'}]}>Defesa Especial</Text>
          </View>
          <Text style={[styles.valor, {fontFamily: 'gillMedium'}]}>{stats[4].base_stat}</Text>
        </View>

        <View style={styles.containerSkill}>
          <View style={styles.containerText}>
            <MaterialIcons name="speed" size={24} color="black" />
            <Text style={[styles.textHabilidades, {fontFamily: 'gillBold'}]}>Agilidade</Text>
          </View>
          <Text style={[styles.valor, {fontFamily: 'gillMedium'}]}>{stats[5].base_stat}</Text>
        </View>
      </View>
      <View style={styles.containerType}>
        {/* <Text style={[styles.textPokemonType, {fontFamily: 'gillBold'}]}>{types[0].type.name}</Text> */}
        <Image source={barraType(types[0].type.name)} />
      </View>
    </View>
  )}
};