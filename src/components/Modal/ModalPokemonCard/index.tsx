import React, { useContext, useEffect, useState } from 'react'
import { Pokemon, getPokemon } from "../../../services/api";
import { View, Modal, ActivityIndicator, Button } from 'react-native';
import { PokemonListProps } from '../../PokemonList';
import { DeckContext } from '../../../context/DeckContext'
import { styles } from './styles';
import { PokemonCard } from '../../PokemonCard';

interface PokemonCardProps {
  item: PokemonListProps;
  isModalVisible: boolean;
  deck: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPokemonCard = ({ isModalVisible, setIsModalVisible, item, deck }: PokemonCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { name, url } = item;
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
    getPokemonDetails(url)
  }, []);

  function getPokemonDetails(url: string) {
    const regex = /\d+/g;
    const number = url.match(regex)?.[1] ?? "";
    const index = parseInt(number);
    
    getPokemon(index)
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

  function handleButton() {
		if (deck) {
			removeCardFromDeck(pokemon.id);
			setIsModalVisible(false);
		} else {
			addCardToDeck(pokemon);
			setIsModalVisible(false);
		}
	}

  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          {
            isLoading ?
              <ActivityIndicator
                size={"large"}
              />
              :
              <PokemonCard tamanho='Large' pokemon={pokemon} >
              </PokemonCard>
          }
        </View>
      </View>
      <Button title={deck ? "Remover do Deck" : "Adicionar ao Deck"} onPress={handleButton}/>
    </Modal>
    
  )
}