import {
  Text,
  ActivityIndicator,
  FlatList,
  View,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import {
  getAllPokemons,
  getMorePokemons,
  getPokemonByName,
} from "../../services/api";
import { PokemonList, PokemonListProps } from "../../components/PokemonList";
import { styles } from "./styles";
import { ModalPokemonCard } from "../../components/Modal/ModalPokemonCard";
import { TouchableOpacity } from "react-native";

export const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<
    PokemonListProps[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nextPokemonList, setNextPokemonList] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: "",
    url: "",
  });
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    listPokemonList();
  }, []);

  function listPokemonList() {
    getAllPokemons()
      .then((response) => {
        setPokemonList(response.data.results);
        setNextPokemonList(response.data.next);
      })
      .catch((error) => {
        console.log(error.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleCarregarMaisPokemons = () => {
    getMorePokemons(nextPokemonList)
      .then((response) => {
        setPokemonList(pokemonList.concat(response.data.results));
        setNextPokemonList(response.data.next);
      })
      .catch((error) => {
        console.log(error.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSearch = () => {
    const searchTextLowerCase = searchText.toLowerCase();
    getPokemonByName(searchTextLowerCase)
      .then((response) => {
        const pokemon = response.data;
        const filteredList = [
          {
            name: pokemon.name,
            url: `pokemon/${pokemon.id}`,
          },
        ];
  
        setFilteredPokemonList(filteredList);
      })
      .catch((error) => {
        console.log(error);
        setFilteredPokemonList([]);
      });
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Pokemon..."
          placeholderTextColor="#26326B"
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#156"} />
      ) : (
        <FlatList
  onEndReached={handleCarregarMaisPokemons}
  data={searchText === "" ? pokemonList : filteredPokemonList}
  renderItem={({ item }) => (
    <PokemonList
      setIsModalVisible={setIsModalVisible}
      setSelectedItem={setSelectedItem}
      item={item}
    />
  )}
/>

      )}
      {isModalVisible && (
        <ModalPokemonCard
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          item={selectedItem}
          deck={false}
        />
      )}
    </View>
  );
};
