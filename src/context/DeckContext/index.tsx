import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pokemon } from '../../services/api';

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

    function addCardToDeck(pokemon: Pokemon) {
        setPokemonList([...pokemonList, pokemon]);
        storeData([...pokemonList, pokemon]);
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