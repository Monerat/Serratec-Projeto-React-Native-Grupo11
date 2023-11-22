import { Text, ActivityIndicator, FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { getAllPokemons, getMorePokemons } from "../../services/api";
import { PokemonList, PokemonListProps } from "../../components/PokemonList";
import { styles } from "./styles";
import { ModalPokemonCard } from "../../components/Modal/ModalPokemonCard";

export const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nextPokemonList, setNextPokemonList] = useState<string>('');
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
        setNextPokemonList(response.data.next);
      })
      .catch(error => {
        console.log(error.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleCarregarMaisPokemons = () =>{
    getMorePokemons(nextPokemonList)
      .then(response => {
        setPokemonList(pokemonList.concat(response.data.results));
        setNextPokemonList(response.data.next);
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
            onEndReached={handleCarregarMaisPokemons}
            data={pokemonList}
            renderItem={({ item }) => {
              return <PokemonList
                setIsModalVisible={setIsModalVisible}
                setSelectedItem={setSelectedItem}
                item={item} />
            }}
          />
      }
      {isModalVisible && <ModalPokemonCard isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} item={selectedItem} deck={false} />}
    </View>
  );
};