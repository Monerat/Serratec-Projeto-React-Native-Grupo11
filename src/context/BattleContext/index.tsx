import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ResultadoBatalhaProps } from '../../components/ResultadoBatalha';

interface ContextProps {
  children: React.ReactNode
}

export interface BattleContextProvider {
    idBatalha: number;
    listaResultadoBatalha: ResultadoBatalhaProps[];
    addBatalha: (batalha: ResultadoBatalhaProps) => void;
}


export const BattleContext = createContext<BattleContextProvider>({
    listaResultadoBatalha:[{
        id: 1,
        resultado:'Win',
        deck:[{
          id: 0,
          name: "",
          sprites: {
            other: {
              "official-artwork": {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
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
        }]
      },],
    addBatalha: (batalha: ResultadoBatalhaProps) => { },
    idBatalha:0
});

export const BattleProvider = ({ children }: ContextProps) => {
  const [listaResultadoBatalha, setListaResultadoBatalha] = useState<ResultadoBatalhaProps[]>([]);
  const [idBatalha, setIdBatalha] = useState<number>();

  useEffect(() => {
    getData()
      .then(res => {
        setListaResultadoBatalha(res ? res : []);
        setIdBatalha(res ? res.length : 0)
      })
  }, []);


  const storeData = async (value: ResultadoBatalhaProps[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('historico-batalha-pokemon', jsonValue);
    } catch (e) {
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('historico-batalha-pokemon');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    }
  };

  function addBatalha(batalha: ResultadoBatalhaProps) {
    setListaResultadoBatalha([...listaResultadoBatalha, batalha]);
    storeData([...listaResultadoBatalha, batalha]);

  }

  return (
    <BattleContext.Provider
      value={{
        idBatalha,
        listaResultadoBatalha,
        addBatalha,
      }}
    >
      {children}
    </BattleContext.Provider>
  )
}