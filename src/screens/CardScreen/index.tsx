import { TouchableOpacity, View } from "react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { useEffect, useState } from "react";
import { Pokemon, getPokemon } from "../../services/api";
import { Button } from "react-native-paper";
import { BackgroundImage } from "../../components/BackgroundImage";

export const CardScreen = () => {
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

  return (
    <BackgroundImage>
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        padding: 16
      }}>
        <Button onPress={handleClick}>TESTE BUTTON</Button>
      </View>
      <View style={{ width: "50%", height: "50%" }}>
        <PokemonCard item={pokemon}></PokemonCard>
      </View>

    </BackgroundImage>
  );
};