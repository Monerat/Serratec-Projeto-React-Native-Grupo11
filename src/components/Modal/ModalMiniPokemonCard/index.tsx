import React, { useContext, useEffect, useState } from 'react'
import { Pokemon, getPokemon } from "../../../services/api";
import { View, Modal, ActivityIndicator, Button, TouchableOpacity, } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { PokemonListProps } from '../../PokemonList';
import { DeckContext } from '../../../context/DeckContext'
import { styles } from './styles';
import { PokemonCard } from '../../PokemonCard';

interface PokemonCardProps {
  id: number;
  isModalVisible: boolean;
  deck: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<PokemonListProps>>;
}

export const ModalMiniPokemonCard = ({ isModalVisible, setIsModalVisible, id, deck, setSelectedItem }: PokemonCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 0,
    name: "",
    sprites: {
      other: {
        "official-artwork": {
          front_default: "",
        }
      }
    },
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        }
      },
      {
        base_stat: 0,
        stat: {
          name: "",

        }
      },
      {
        base_stat: 0,
        stat: {
          name: "",

        }
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        }
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        }
      },
      {
        base_stat: 0,
        stat: {
          name: "",
        }
      }
    ],
    types: [
      {
        type: {
          name: "",
        }
      },
      {
        type: {
          name: "",
        }
      }
    ],
  });

  const { addCardToDeck, removeCardFromDeck } = useContext(DeckContext);

  useEffect(() => {
    getPokemonDetails(id)
  }, []);

  function getPokemonDetails(id: number) {
    getPokemon(id)
      .then(response => {
        setPokemon(response.data);

      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  function abrirModal() {
    setSelectedItem({
      name: pokemon.name,
      url: 'https://pokeapi.co/api/v2/pokemon/'+pokemon.id
  });
    setIsModalVisible(true);
  }

  return (
    <TouchableOpacity onPress={abrirModal} style={styles.touchContainer}>
      <PokemonCard tamanho='Small' pokemon={pokemon}></PokemonCard>
    </TouchableOpacity>
  )
}