import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pokemon } from '../../services/api';
import { Alert } from 'react-native';

interface ContextProps {
  children: React.ReactNode
}

export interface DeckContextProvider {
  pokemonList: Pokemon[],
  addCardToDeck: (Card: Pokemon) => void,
  removeCardFromDeck: (index: number) => void,
}


export const DeckContext = createContext<DeckContextProvider>({
  addCardToDeck: (card: Pokemon) => { },
  pokemonList: [{
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
  }],
  removeCardFromDeck: (index: number) => { },
});

export const DeckProvider = ({ children }: ContextProps) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    getData()
      .then(res => {
        setPokemonList(res ? res : []);
      })
  }, []);


  const storeData = async (value: Pokemon[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('list-cards-deck', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('list-cards-deck');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const checkPokemonDeck = (id: number) => {
    const encontrouPoke = pokemonList.find((pokemon) => pokemon.id === id)
    if (encontrouPoke) {
      return false;
    }
    else {
      return true;
    }
  }

  function addCardToDeck(pokemon: Pokemon) {
    if (checkPokemonDeck(pokemon.id)){
      if (pokemonList.length < 6) {
        setPokemonList([...pokemonList, pokemon]);
        storeData([...pokemonList, pokemon]);
      }else{
        Alert.alert("Número máximo de Pokémon's no Deck atingido")
      }
    }else{
      Alert.alert("Pokémon já está adicionado no Deck")
    }
  }

  function removeCardFromDeck(index: number) {
    let newPokemonList = pokemonList.filter(pokemon => {
      return pokemon.id !== index
    })

    setPokemonList(newPokemonList);
    storeData(newPokemonList);
  }

  return (
    <DeckContext.Provider
      value={{
        pokemonList,
        addCardToDeck,
        removeCardFromDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}