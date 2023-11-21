import { FlatList, View, Text, Image, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { styles } from "../DeckScreen/styles"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";
import { DeckContext } from "../../context/DeckContext";
import { PokemonListProps } from "../../components/PokemonList";
import { ModalPokemonCard } from "../../components/Modal/ModalPokemonCard";
import { ModalMiniPokemonCard } from "../../components/Modal/ModalMiniPokemonCard";




export const DeckScreen = () => {
  const { pokemonList } = useContext(DeckContext)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: '',
    url: ''
  });

  return (
    <BackgroundImageHome>
     
      <View style={styles.headerContainer}>
        <Image source={pokemonLogo} style={styles.imageLogo} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}><AntDesign name="star" size={16} color="black" />DECK POKEMON                                                                     0<MaterialCommunityIcons name="cards-outline" size={16} color="black" /></Text>
        <Text style={styles.textSublinha}>_______________________________________________________________</Text>
      </View>
      {/* <ScrollView contentContainerStyle={styles.deckContainer}>
        {pokemonList.map((pokemon) => {
          return <ModalMiniPokemonCard id={pokemon.id} deck ={true} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setSelectedItem={setSelectedItem}/>
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        numColumns={2}
        renderItem={({ item }) => (
          <ModalMiniPokemonCard id={item.id} deck ={true} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setSelectedItem={setSelectedItem}/>
        )}
      />
      {isModalVisible && <ModalPokemonCard deck={true} item={selectedItem} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />}
    </BackgroundImageHome>
  );
};