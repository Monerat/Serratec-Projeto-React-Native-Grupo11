import { FlatList, View, Text, Image } from "react-native";
import { useState } from "react";
import { Pokemon, getPokemon } from "../../services/api";

import styles from "../DeckScreen/styles"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import { MiniPokemonCard } from "../../components/MiniPokemonCard";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";



export const DeckScreen = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 1,
    name: "bulbasaur",
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        }
      }
    },
    stats: [
      {
        "base_stat": 45,
        "stat": {
          "name": "hp",
        }
      },
      {
        "base_stat": 49,
        "stat": {
          "name": "attack",

        }
      },
      {
        "base_stat": 49,
        "stat": {
          "name": "defense",

        }
      },
      {
        "base_stat": 65,
        "stat": {
          "name": "special-attack",
        }
      },
      {
        "base_stat": 65,
        "stat": {
          "name": "special-defense",
        }
      },
      {
        "base_stat": 45,
        "stat": {
          "name": "speed",
        }
      }
    ],
    types: [
      {
        "type": {
          "name": "grass",

        }
      },
      {
        "type": {
          "name": "poison",
        }
      }
    ],

  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClick = () => {
    const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
    getPokemon(randomPokemonId)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.log(error.data);
      }).finally(() => {
        setIsLoading(false);
      })
  }
  const generatePokemonList = () => {
    return Array.from({ length: 10 }, (_, index) => index + 1);
  };

  const renderItem = ({ item }: { item: number }) => (
    <View style={styles.rua1}>
      <MiniPokemonCard item={pokemon} />
    </View>
  );


  return (
    <BackgroundImageHome >

      <View style={styles.container}>

        <Image source={pokemonLogo} style={styles.imageLogo} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}><AntDesign name="star" size={16} color="black" />DECK POKEMON                                                                     0<MaterialCommunityIcons name="cards-outline" size={16} color="black" /></Text>
        <Text style={styles.textSublinha}>_______________________________________________________________</Text>
      </View>
      <FlatList
        data={generatePokemonList()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContainer}
      />

    </BackgroundImageHome>
  );
};