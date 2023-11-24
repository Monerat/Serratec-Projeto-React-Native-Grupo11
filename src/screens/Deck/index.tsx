import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";
import { DeckContext } from "../../context/DeckContext";
import { PokemonListProps } from "../../components/PokemonList";
import { ModalPokemonCard } from "../../components/Modal/ModalPokemonCard";
import { ModalMiniPokemonCard } from "../../components/Modal/ModalMiniPokemonCard";
import { Pokemon, getRandomPokemons } from "../../services/api";

export const Deck = () => {
  const { pokemonList, addCardToDeck, removeAllCardsFromDeck } =
    useContext(DeckContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: "",
    url: "",
  });
  const getListSize = (pokemonList: Pokemon[]): number => {
    return pokemonList.length;
  };

  const handleRandomDeck = async () => {
    try {
      const randomPokemons = await getRandomPokemons(6);
      randomPokemons.forEach((pokemon) => addCardToDeck(pokemon));
    } catch (error) {
      console.error("Error fetching random Pokémon cards", error);
    }
  };

  const handleClearDeck = () => {
    Alert.alert(
      "Limpar Deck",
      "Tem certeza que deseja esvaziar o deck?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Esvaziar",
          onPress: removeAllCardsFromDeck,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <BackgroundImageHome>
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.randomDeckButton}
      onPress={handleRandomDeck}
    >
      <Text style={styles.randomDeckButtonText}>Montar Deck Aleatório</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.clearDeckButton}
      onPress={handleClearDeck}
    >
      <Text style={styles.clearDeckButtonText}>Limpar Deck</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.headerContainer}>
    <Image source={pokemonLogo} style={styles.imageLogo} />
    <View style={styles.viewText}>
      <View style={styles.viewDeck}>
        <AntDesign name="star" size={24} color="black" />
        <Text style={styles.text}>DECK POKÉMON</Text>
      </View>
      <View style={styles.viewNumero}>
        <Text style={styles.numeroCards}>{getListSize(pokemonList)}</Text>
        <MaterialCommunityIcons
          name="cards-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  </View>
  <FlatList
    data={pokemonList}
    numColumns={2}
    contentContainerStyle={styles.miniCardsContainer}
    renderItem={({ item }) => (
      <ModalMiniPokemonCard
        id={item.id}
        deck={true}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setSelectedItem={setSelectedItem}
      />
    )}
  />
  {isModalVisible && (
    <ModalPokemonCard
      deck={true}
      item={selectedItem}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  )}
</BackgroundImageHome>

  );
};
