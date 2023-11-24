import React, { useEffect, useState } from 'react'
import { Pokemon, getPokemon } from "../../../services/api";
import { Alert, TouchableOpacity, View } from 'react-native';
import { PokemonListProps } from '../../PokemonList';
import { PokemonCard } from '../../PokemonCard';
import { styles } from './styles';
import { RodadaProp } from '../../../screens/Battle';


interface PokemonCardProps {
  id: number;
  battleStart: boolean;
  statusEscolhido: string;
  resultadoBatalha: RodadaProp[];
  resultadoRodada: RodadaProp;
  setBattleStart: React.Dispatch<React.SetStateAction<boolean>>;
  setResultadoRodada: React.Dispatch<React.SetStateAction<RodadaProp>>;
  setResultadoBatalha: React.Dispatch<React.SetStateAction<RodadaProp[]>>;
}

export const ModalBatalha = ({ id,battleStart,setBattleStart,statusEscolhido, resultadoRodada, setResultadoRodada ,resultadoBatalha, setResultadoBatalha}: PokemonCardProps) => {
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
          setResultadoRodada({
            idPoke: pokemon.id,
            idPokeRoboto: PokemonRobot.id,
            statusDaRodada: statusEscolhido,
            vencedor: true
          })
          setResultadoBatalha([...resultadoBatalha, resultadoRodada])
          setBattleStart(false)
        }, 3000);
        
      }else{
        //perdeu
        setTimeout(() => {
          Alert.alert('Voce se fodeu')
          setResultadoRodada({
            idPoke: pokemon.id,
            idPokeRoboto: PokemonRobot.id,
            statusDaRodada: statusEscolhido,
            vencedor: false
          })
          setResultadoBatalha([...resultadoBatalha, resultadoRodada])
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