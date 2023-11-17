import React,{useState,useEffect} from 'react'
import { getPokemon, Pokemon } from "../../services/api";
import { View, Image, Text, } from 'react-native';
import { styles } from "../PokemonCard/styles"
import { Button } from 'react-native-paper';
import img from "../../assets/images/FundoPokemon.jpg"
import BackgroundImage from '../BackgroundImage';

export const PokemonCard = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const corDoCardPeloType = (type: string): string => {
        switch (type) {
          case "normal":
            return "#a8a878";
          case "fire":
            return "#ff0000";
          case "water":
            return "#6890f0";
          case "grass":
            return "#78c850";
          case "flying":
            return "#a890f0";
          case "fighting":
            return "#c03028";
          case "poison":
            return "#a040a0";
          case "electric":
            return "#f8d030";
          case "ground":
            return "#e0c068";
          case "rock":
            return "#b8a038";
          case "psychic":
            return "#f85888";
          case "ice":
            return "#98d8d8";
          case "bug":
            return "#a8b820";
          case "ghost":
            return "#705898";
          case "steel":
            return "#b8b8d0";
          case "dragon":
            return "#7038f8";
          case "dark":
            return "#705848";
          case "fairy":
            return "#ee99ac";
          default:
            return "#ffffff";
        }
      };
    
      useEffect(() => {
        const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
             getPokemon(randomPokemonId)
            .then(response => {
              setPokemon(response.data);
              console.log(pokemon?.stats[0].stat.name);
            })
            .catch(error => {
              console.log(error.data);
            }).finally(() => {
              setIsLoading(false);
            })
        },[]);
      
      return( 
        <View style={[styles.container, { backgroundColor: corDoCardPeloType(pokemon?.types[0]?.type.name) }]}>
            <View style={styles.header}>
                <Text style={styles.textPokemonName}>{pokemon?.name}</Text>
                <Text style={styles.textPokemonHp}>{pokemon?.stats[0].stat.name}</Text>
                <Text style={styles.textPokemonName}>{pokemon?.stats[0].base_stat}</Text>
                <Text style={styles.textPokemonType}>{pokemon?.types[0].type.name}</Text>           
            </View>
            <View style={styles.containerPokemon}>
                <BackgroundImage>                    
                    <Image source={{ uri: pokemon?.sprites.other["official-artwork"].front_default }} style ={styles.imgPokemon}/>
                </BackgroundImage>
            </View>           
            <View style={styles.containerHabilidades}>
                <View style={styles.containerSkill}>
                    <Text style={styles.textHabilidades}>Força</Text>
                    <Text style={styles.valor}>Valor</Text>
                </View>
                <View style={styles.containerSkill}>
                    <Text style={styles.textHabilidades}>Ataque</Text>
                    <Text style={styles.valor}>Valor</Text>
                </View>
                <View style={styles.containerSkill}>
                    <Text style={styles.textHabilidades}>Defesa</Text>
                    <Text style={styles.valor}>Valor</Text>
                </View>
                <View style={styles.containerSkill}>
                    <Text style={styles.textHabilidades}>Altura</Text>
                    <Text style={styles.valor}>Valor</Text>
                </View>
                <View style={styles.containerSkill}>
                    <Text style={styles.textHabilidades}>Agilidades</Text>
                    <Text style={styles.valor}>Valor</Text>
                </View>
            </View>            
        </View>
    )
}