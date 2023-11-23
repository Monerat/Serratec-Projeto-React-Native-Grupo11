import React, { useContext, useEffect, useState } from 'react'
import { Pokemon, getPokemon } from "../../../services/api";
import { View, Modal, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { PokemonListProps } from '../../PokemonList';
import { DeckContext } from '../../../context/DeckContext'
import { styles } from './styles';
import { PokemonCard } from '../../PokemonCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface PokemonCardProps {
  item: PokemonListProps;
  isModalVisible: boolean;
  deck: boolean;
  selectedId: number;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setStatusEscolhido: React.Dispatch<React.SetStateAction<string>>;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  setBattleStart:  React.Dispatch<React.SetStateAction<boolean>>;
  removeCard: (id:number)=>void;
 
}

export const ModalPokemonCardBatalha = ({ isModalVisible, setIsModalVisible, item, deck, setStatusEscolhido, setSelectedId, selectedId, setBattleStart,removeCard }: PokemonCardProps) => {
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

  function handleButtonHp() {
    setStatusEscolhido('hp')
    setSelectedId(selectedId)
    setBattleStart(true)
    removeCard(selectedId)
    setIsModalVisible(false);
	}

  function handleButtonAtk() {
    setStatusEscolhido('attack')
    setSelectedId(selectedId)
    setBattleStart(true)
    removeCard(selectedId)
    setIsModalVisible(false);
	}
  function handleButtonDef() {
    setStatusEscolhido('defense')
    setSelectedId(selectedId)
    setBattleStart(true)
    removeCard(selectedId)
    setIsModalVisible(false);
	}
  function handleButtonAtkE() {
    setStatusEscolhido('special-attack')
    setSelectedId(selectedId)
    setBattleStart(true)
    removeCard(selectedId)
    setIsModalVisible(false);
	}
  function handleButtonDefE() {
    setStatusEscolhido('special-defense')
    setSelectedId(selectedId)
    setBattleStart(true)
    removeCard(selectedId)
    setIsModalVisible(false);
	}
  function handleButtonAgi() {
    setStatusEscolhido('speed')
    setSelectedId(selectedId)
    setBattleStart(true)
    removeCard(selectedId)
    setIsModalVisible(false);
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
        <View style={styles.buttonsContainer} >
          <View style={styles.buttonsContainer1} >
            <TouchableOpacity style={styles.buttonsHp} onPress={handleButtonHp}>
              <MaterialCommunityIcons name="cards-heart" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsAttack} onPress={handleButtonAtk}>
              <MaterialCommunityIcons name="sword" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsDefesa} onPress={handleButtonDef}>
              <MaterialIcons name="shield" size={50} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer2} >
            <TouchableOpacity style={styles.buttonsAttackEspecial} onPress={handleButtonAtkE}>
              <FontAwesome5 name="firefox" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsDefesaEspecial} onPress={handleButtonDefE}>
              <MaterialCommunityIcons name="shield-sun" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonsAgilidade} onPress={handleButtonAgi}>
            <MaterialIcons name="speed" size={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </Modal>
    
  )
}