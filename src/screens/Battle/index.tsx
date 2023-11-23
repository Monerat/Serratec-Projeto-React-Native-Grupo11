import { FlatList, View } from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";
import { BackgroundImageBattle } from "../../components/BackgroundImageBattle";
import { DeckContext } from "../../context/DeckContext";
import { PokemonListProps } from "../../components/PokemonList";
import { Pokemon } from "../../services/api";
import { CardBack } from "../../components/CardBack";
import { ModalPokemonCardBatalha } from "../../components/Modal/ModalPokemonCardBatalha";
import { ModalMiniPokemonCardBatalha } from "../../components/Modal/ModalMiniPokemonCardBatalha";
import { ModalBatalha } from "../../components/Modal/ModalBatalha";

export const Battle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { pokemonList } = useContext(DeckContext)
  const [deckBatalha, setDeckBatalha] = useState<Pokemon[]>(pokemonList);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [statusEscolhido, setStatusEscolhido] =useState<string>('');
  const [deckRobot, setDeckRobot] = useState<number[]>([0,1,2,3,4,5]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [battleStart, setBattleStart] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: '',
    url: ''
  });
  
  function removeCard(id: number) {
		setDeckBatalha(oldState=>oldState.filter(
			deckBatalha => deckBatalha.id !== id
		))
	}

  return (
    <BackgroundImageBattle>
      <View style={styles.oponentDeckContainer}>
        <FlatList
        data={deckRobot}
        horizontal={true}
        renderItem={()=>{return <CardBack/>}}
        />
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.centerFieldContainer}>
          {battleStart && <ModalBatalha id={selectedId} statusEscolhido={statusEscolhido} battleStart={battleStart} setBattleStart={setBattleStart} />}
        </View>
      </View>
      <View style={styles.myDeckContainer}>
        <FlatList
          data={deckBatalha}
          horizontal={true}
          renderItem={({ item }) => (
            <ModalMiniPokemonCardBatalha id={item.id} deck={true} isModalVisible={isModalVisible}
             setIsModalVisible={setIsModalVisible} setSelectedItem={setSelectedItem} setSelectedId={setSelectedId}  />
          )}
        />
      </View>
      {isModalVisible && <ModalPokemonCardBatalha deck={true} item={selectedItem} isModalVisible={isModalVisible} 
      setIsModalVisible={setIsModalVisible} setStatusEscolhido={setStatusEscolhido} setSelectedId={setSelectedId} 
      selectedId={selectedId} setBattleStart={setBattleStart} removeCard={removeCard}/>}
    </BackgroundImageBattle>
  );
};