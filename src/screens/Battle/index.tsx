import { FlatList, View, Text, TouchableOpacity } from "react-native";
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
import { useFonts } from "expo-font";
import { Audio } from 'expo-av';

export interface RodadaProp{
  idPoke: number;
  idPokeRoboto: number;
  statusDaRodada: string;
  vencedor: boolean;
}

export const Battle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [battleResultMessage, setBattleResultMessage] = useState<string>('');
  const { pokemonList } = useContext(DeckContext)
  const { idBatalha } = useContext(BattleContext)
  const [idBatalhaAtual, setIdBatalhaAtual] = useState<number>(idBatalha);
  const [deckBatalha, setDeckBatalha] = useState<Pokemon[]>(pokemonList);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [statusEscolhido, setStatusEscolhido] =useState<string>('');
  const [deckRobot, setDeckRobot] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [battleStart, setBattleStart] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
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
  const [fontsLoaded] = useFonts({
    'pokemonFont': require('../../assets/fonts/pokemon-solid.ttf')
  })
  
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
        id: idBatalhaAtual,
        resultado: 'Win',
        deck: pokemonList
      })
      playWinSound('win-music.mp3')
      setTimeout(() => {
      setBattleResultMessage('Vitória');
      setIdBatalhaAtual(idBatalhaAtual+1)
    }, 2000);
    }else{
      addBatalha({
        id: idBatalhaAtual,
        resultado: 'Loss',
        deck: pokemonList
      })
      playLossSound('loss-music.mp3')
      setTimeout(() => {
      setBattleResultMessage('Derrota');
    }, 2000);
      setIdBatalhaAtual(idBatalhaAtual+1)
    }
  }

  const playWinSound = async (soundFileName: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/music/win-music.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

  const playLossSound = async (soundFileName: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/music/loss-music.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

  const playBattleSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/music/battle-music.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading sound', error);
    }
  };

  useEffect(() => {
      playBattleSound();
  }, []);

  const restartBattle = () => {
    setDeckBatalha(pokemonList);
    setDeckRobot([0, 1, 2, 3, 4, 5]);
    setBattleStart(false);
    setResultadoBatalha([]);
    setBattleResultMessage('');
    playBattleSound();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  
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
        <View style={styles.messageContainer}>
        {battleResultMessage !== '' && (
          <Text style={[styles.resultMessage, { fontFamily: 'pokemonFont' }]}>{`${battleResultMessage}`}</Text>
        )}
        {battleResultMessage !== '' && (
        <TouchableOpacity onPress={restartBattle} style={styles.restartButton}>
            <Text style={styles.restartButtonText}>Reiniciar Batalha</Text>
          </TouchableOpacity>
          )}
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