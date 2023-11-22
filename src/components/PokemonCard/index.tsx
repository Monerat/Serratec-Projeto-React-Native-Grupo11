import React from 'react'
import { Pokemon } from "../../services/api";
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { styles } from "../PokemonCard/styles"
import { stylesMini } from "../PokemonCard/stylesMini"
import { BackgroundImage } from '../BackgroundImage';
import { CorCardPorType } from '../CorCardPorType';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { BarraType } from '../../components/BarType';
interface PokemonCardProps {
  tamanho?: 'Large' | 'Small';
  pokemon: Pokemon;
}

export const PokemonCard = ({ tamanho, pokemon }: PokemonCardProps) => {
  let iconSize = 24
  if (tamanho === 'Small') {
    iconSize = 10
  }

  const [fontsLoaded] = useFonts({
    'gillMedium': require('../../assets/fonts/GillSansMedium.otf'),
    'gillBold': require('../../assets/fonts/GillSansCondensedBold.otf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <>
      <CorCardPorType pokemonType={pokemon.types[0].type.name}>
        <View style={tamanho === 'Large' ? styles.header : stylesMini.header}>
          <Text style={[tamanho === 'Large' ? styles.textPokemonName : stylesMini.textPokemonName, { fontFamily: 'gillBold' }]}>{pokemon.name}</Text>
          <View style={tamanho === 'Large' ? styles.containerHp : stylesMini.containerHp}>
            <Text style={[tamanho === 'Large' ? styles.textPokemonHp : stylesMini.textPokemonHp, { fontFamily: 'gillBold' }]}>{pokemon.stats[0].stat.name}</Text>
            <Text style={[tamanho === 'Large' ? styles.textPokemonNumber : stylesMini.textPokemonNumber, { fontFamily: 'gillBold' }]}>{pokemon.stats[0].base_stat}</Text>
          </View>
        </View>

        <View style={tamanho === 'Large' ? styles.containerPokemon : stylesMini.containerPokemon}>
          <BackgroundImage pokemonType={pokemon.types[0].type.name} >
            {pokemon.sprites.other["official-artwork"].front_default && (
              <Image source={{ uri: pokemon.sprites.other["official-artwork"].front_default }} style={tamanho === 'Large' ? styles.imgPokemon : stylesMini.imgPokemon} />
            )}
          </BackgroundImage>
        </View>

        <View style={tamanho === 'Large' ? styles.containerHabilidades : stylesMini.containerHabilidades}>

          <View style={tamanho === 'Large' ? styles.containerSkill : stylesMini.containerSkill}>
            <View style={tamanho === 'Large' ? styles.containerText : stylesMini.containerText}>
              <MaterialCommunityIcons name="sword" size={iconSize} color="black" />
              <Text style={[tamanho === 'Large' ? styles.textHabilidades : stylesMini.textHabilidades, { fontFamily: 'gillBold' }]}>Ataque</Text>
            </View>
            <Text style={[tamanho === 'Large' ? styles.valor : stylesMini.valor, { fontFamily: 'gillMedium' }]}>{pokemon.stats[1].base_stat}</Text>
          </View>

          <View style={tamanho === 'Large' ? styles.containerSkill : stylesMini.containerSkill}>
            <View style={tamanho === 'Large' ? styles.containerText : stylesMini.containerText}>
              <MaterialIcons name="shield" size={iconSize} color="black" />
              <Text style={[tamanho === 'Large' ? styles.textHabilidades : stylesMini.textHabilidades, { fontFamily: 'gillBold' }]}>Defesa</Text>
            </View>
            <Text style={[tamanho === 'Large' ? styles.valor : stylesMini.valor, { fontFamily: 'gillMedium' }]}>{pokemon.stats[2].base_stat}</Text>
          </View>

          <View style={tamanho === 'Large' ? styles.containerSkill : stylesMini.containerSkill}>
            <View style={tamanho === 'Large' ? styles.containerText : stylesMini.containerText}>
              <FontAwesome5 name="firefox" size={iconSize} color="black" />
              <Text style={[tamanho === 'Large' ? styles.textHabilidades : stylesMini.textHabilidades, { fontFamily: 'gillBold' }]}>Ataque Especial</Text>
            </View>
            <Text style={[tamanho === 'Large' ? styles.valor : stylesMini.valor, , { fontFamily: 'gillMedium' }]}>{pokemon.stats[3].base_stat}</Text>
          </View>

          <View style={tamanho === 'Large' ? styles.containerSkill : stylesMini.containerSkill}>
            <View style={tamanho === 'Large' ? styles.containerText : stylesMini.containerText}>
              <MaterialCommunityIcons name="shield-sun" size={iconSize} color="black" />
              <Text style={[tamanho === 'Large' ? styles.textHabilidades : stylesMini.textHabilidades, { fontFamily: 'gillBold' }]}>Defesa Especial</Text>
            </View>
            <Text style={[tamanho === 'Large' ? styles.valor : stylesMini.valor, { fontFamily: 'gillMedium' }]}>{pokemon.stats[4].base_stat}</Text>
          </View>

          <View style={tamanho === 'Large' ? styles.containerSkill : stylesMini.containerSkill}>
            <View style={tamanho === 'Large' ? styles.containerText : stylesMini.containerText}>
              <MaterialIcons name="speed" size={iconSize} color="black" />
              <Text style={[tamanho === 'Large' ? styles.textHabilidades : stylesMini.textHabilidades, { fontFamily: 'gillBold' }]}>Agilidade</Text>
            </View>
            <Text style={[tamanho === 'Large' ? styles.valor : stylesMini.valor, { fontFamily: 'gillMedium' }]}>{pokemon.stats[5].base_stat}</Text>
          </View>
        </View>
        <View style={tamanho === 'Large' ? styles.containerType : stylesMini.containerType}>
          <BarraType pokemonType={pokemon.types[0].type.name} tamanho={tamanho} />
        </View>
      </CorCardPorType>
    </>
  )
}