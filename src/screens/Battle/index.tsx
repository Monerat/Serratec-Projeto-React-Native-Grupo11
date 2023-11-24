import { FlatList, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import { BackgroundImageBattle } from "../../components/BackgroundImageBattle";
import { DeckContext } from "../../context/DeckContext";
import { PokemonListProps } from "../../components/PokemonList";
import { Pokemon } from "../../services/api";
import { CardBack } from "../../components/CardBack";
import { ModalPokemonCardBatalha } from "../../components/Modal/ModalPokemonCardBatalha";
import { ModalMiniPokemonCardBatalha } from "../../components/Modal/ModalMiniPokemonCardBatalha";
import { ModalBatalha } from "../../components/Modal/ModalBatalha";
import { BattleContext } from "../../context/BattleContext";

export interface RodadaProp{
  idPoke: number;
  idPokeRoboto: number;
  statusDaRodada: string;
  vencedor: boolean;
}

export const Battle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { pokemonList } = useContext(DeckContext)
  const { idBatalha } = useContext(BattleContext)
  const [deckBatalha, setDeckBatalha] = useState<Pokemon[]>(pokemonList);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [statusEscolhido, setStatusEscolhido] =useState<string>('');
  const [deckRobot, setDeckRobot] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [battleStart, setBattleStart] = useState<boolean>(false);
  const [resultadoRodada, setResultadoRodada] = useState<RodadaProp>({
    idPoke: 0,
    idPokeRoboto: 0,
    statusDaRodada: '',
    vencedor: false
  });
  const [resultadoBatalha, setResultadoBatalha] = useState<RodadaProp[]>([])
  const [selectedItem, setSelectedItem] = useState<PokemonListProps>({
    name: '',
    url: ''
  });
  
  useEffect(() => {
     if(deckBatalha.length===0){
      handleFinalizarBatalha();
     }
  }, [deckBatalha]);

  function removeCard(id: number) {
    setDeckBatalha((oldState) =>
      oldState.filter((deckBatalha) => deckBatalha.id !== id)
    );
  
    setDeckRobot((oldDeckRobot) => {
      const newDeckRobot = [...oldDeckRobot];
      newDeckRobot.pop();
      return newDeckRobot;
    });
  }

  const { addBatalha } = useContext(BattleContext);

  const handleFinalizarBatalha = ()=>{
    let count = 0
    resultadoBatalha.forEach((element) => {
      if (element.vencedor) {
        count++;
      }
    });
    if(count>2){
      addBatalha({
        id: idBatalha+1,
        resultado: 'Win',
        deck: pokemonList
      })
    }else{
      addBatalha({
        id: idBatalha+1,
        resultado: 'Loss',
        deck: pokemonList
      })
    }
  }
  return (
    <BackgroundImageBattle>
      <View style={styles.oponentDeckContainer}>
        <FlatList
          data={deckRobot}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <CardBack />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.fieldContainer}>
        <View style={styles.centerFieldContainer}>
          {battleStart && <ModalBatalha id={selectedId} statusEscolhido={statusEscolhido} 
          battleStart={battleStart} setBattleStart={setBattleStart} setResultadoRodada={setResultadoRodada} resultadoRodada={resultadoRodada}
          resultadoBatalha={resultadoBatalha} setResultadoBatalha={setResultadoBatalha}/>}
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