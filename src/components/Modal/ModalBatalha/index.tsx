import React, { useEffect, useState } from 'react'
import { Pokemon, getPokemon } from "../../../services/api";
import { Alert, TouchableOpacity, View } from 'react-native';
import { PokemonListProps } from '../../PokemonList';
import { PokemonCard } from '../../PokemonCard';
import { styles } from './styles';


interface PokemonCardProps {
  id: number;
  battleStart: boolean;
  statusEscolhido: string;
  setBattleStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalBatalha = ({ id,battleStart,setBattleStart,statusEscolhido }: PokemonCardProps) => {
  const [isLoadingPoke, setIsLoadingPoke] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [PokemonRobot, setPokemonRobot] = useState<Pokemon>({
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
    cardRobot()
    duelo()    
  }, [isLoading]);

  function getPokemonDetails(id: number) {
    if(isLoadingPoke){
      getPokemon(id)
      .then(response => {
        setPokemon(response.data);

      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingPoke(false);
      });
    }
  }

  const cardRobot = () => {
    const randomPokemon = Math.floor(Math.random() * 1000);
    if(isLoading){
      getPokemon(randomPokemon)
      .then(response =>{
          setPokemonRobot(response.data)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }
  
  const duelo = () =>{
    if(isLoading===false&&isLoadingPoke===false){
      const statusPokemon = pokemon.stats.find((stat)=> stat.stat.name === statusEscolhido)!.base_stat
      const statusPokemonRobot = PokemonRobot.stats.find((stat)=> stat.stat.name === statusEscolhido)!.base_stat
      if(statusPokemon>statusPokemonRobot){
        //venceu
        setTimeout(() => {
          Alert.alert('Voce ganhou')
          setBattleStart(false)
        }, 3000);
        
      }else{
        //perdeu
        setTimeout(() => {
          Alert.alert('Voce se fodeu')
          setBattleStart(false)
        }, 3000);
      }
    }
    
  }

  return (
    <>
      <View style= {styles.batalhaContainer}>
        <View style= {styles.cardContainer}>
          <PokemonCard tamanho='Small' pokemon={pokemon}></PokemonCard>
        </View>
        <View style= {styles.cardContainer}>
          <PokemonCard tamanho='Small' pokemon={PokemonRobot}></PokemonCard>
        </View>
      </View>
    </>
  )
}