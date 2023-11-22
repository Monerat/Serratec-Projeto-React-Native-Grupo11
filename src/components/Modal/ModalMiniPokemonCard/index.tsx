import React, { useEffect, useState } from 'react'
import { Pokemon, getPokemon } from "../../../services/api";
import { TouchableOpacity } from 'react-native';
import { PokemonListProps } from '../../PokemonList';
import { PokemonCard } from '../../PokemonCard';
import { styles } from './styles';


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