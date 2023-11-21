import { FlatList, View, Text, Image } from "react-native";
import { useContext, useState } from "react";
import { styles } from "../DeckScreen/styles"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import { MiniPokemonCard } from "../../components/MiniPokemonCard";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";
import { DeckContext } from "../../context/DeckContext";
import { PokemonCard } from "../../components/PokemonCard";
import { PokemonListProps } from "../../components/PokemonList";




export const DeckScreen = () => {
  const { pokemonList } = useContext(DeckContext)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: '',
    url: ''
  });

  return (
    <BackgroundImageHome>

      <View style={styles.container}>

        <Image source={pokemonLogo} style={styles.imageLogo} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}><AntDesign name="star" size={16} color="black" />DECK POKEMON                                                                     0<MaterialCommunityIcons name="cards-outline" size={16} color="black" /></Text>
        <Text style={styles.textSublinha}>_______________________________________________________________</Text>
      </View>
      <FlatList
        data={pokemonList}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <MiniPokemonCard id={item.id} setIsModalVisible={setIsModalVisible} isModalVisible={false} deck={true} setSelectedItem={setSelectedItem}/>
        )}
      />
      {isModalVisible && <PokemonCard deck={true} item={selectedItem} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />}
    </BackgroundImageHome>
  );
};