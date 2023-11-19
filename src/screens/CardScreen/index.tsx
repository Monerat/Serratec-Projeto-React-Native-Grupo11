import { Text, ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { SetStateAction, useEffect, useState } from "react";
import { Pokemon, getAllPokemons, getPokemon } from "../../services/api";

import { PokemonList, PokemonListProps } from "../../components/PokemonList";
import { styles } from "./styles";

export const CardScreen = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: '',
	  url: ''
  });
  
  useEffect(() => {
    listPokemonList();
  }, []);

  function listPokemonList() {
    getAllPokemons()
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.log(error.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      {
        isLoading ?
          <ActivityIndicator
            size={"large"}
            color={'#156'}
          />
          :
          <FlatList
            data={pokemonList}
            renderItem={({ item }) => {
              return <PokemonList
                setIsModalVisible={setIsModalVisible}
                setSelectedItem={setSelectedItem}
                item={item} />
            }}
          />
      }
      {isModalVisible && <PokemonCard isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} item={selectedItem} />}
    </View>
  );
};