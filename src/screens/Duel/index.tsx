import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { DeckContext } from '../../context/DeckContext';
import { Pokemon, PokemonStat } from '../../services/api';
import { getRandomPokemon } from '../../services/api';
import { styles } from './styles';

export const Duel = () => {
  const { pokemonList } = useContext(DeckContext);
  const [userDeck, setUserDeck] = useState<Pokemon[]>([]);
  const [botDeck, setBotDeck] = useState<Pokemon[]>([]);
  const [userCardIndex, setUserCardIndex] = useState<number>(0);
  const [botCardIndex, setBotCardIndex] = useState<number>(0);
  const [isDuelStarted, setIsDuelStarted] = useState<boolean>(false);
  const [userPokemon, setUserPokemon] = useState<Pokemon>({
    id: 0,
    name: '',
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    stats: [],
    types: [],
  });
  const [botPokemon, setBotPokemon] = useState<Pokemon>({
    id: 0,
    name: '',
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    stats: [],
    types: [],
  });

  const handleStartDuel = () => {
    setupBotDeck();
    setUserPokemon(userDeck[userCardIndex]);
    setBotPokemon(botDeck[botCardIndex]);
    setIsDuelStarted(true);
  };

  const handleRestartDuel = () => {
    setUserCardIndex(0);
    setBotCardIndex(0);
    setIsDuelStarted(false);
  };

  useEffect(() => {
    if (pokemonList.length === 6) {
      setUserDeck(pokemonList);
      setupBotDeck();
    } else {
      Alert.alert('Atenção', 'Você precisa ter seis cartas no seu deck para iniciar o duelo.');
    }
  }, [pokemonList]);

  const setupBotDeck = async () => {
    const botDeck: Pokemon[] = [];
    while (botDeck.length < 6) {
      const randomPokemon = await getRandomPokemon();
      if (!botDeck.some((card) => card.id === randomPokemon.id)) {
        botDeck.push(randomPokemon);
      }
    }
    setBotDeck(botDeck);
  };

  const handleNextRound = () => {
    setUserCardIndex((prevIndex) => prevIndex + 1);
    setBotCardIndex((prevIndex) => prevIndex + 1);

    if (userCardIndex < userDeck.length - 1 && botCardIndex < botDeck.length - 1) {
      setUserPokemon(userDeck[userCardIndex + 1]);
      setBotPokemon(botDeck[botCardIndex + 1]);
    } else {
      // Última rodada
      finishDuel();
    }
  };

  const finishDuel = () => {
    const userAverage = calculateAverageStats(userPokemon.stats);
    const botAverage = calculateAverageStats(botPokemon.stats);

    if (userAverage > botAverage) {
      Alert.alert('Resultado', 'Você venceu a partida!');
    } else if (userAverage < botAverage) {
      Alert.alert('Resultado', 'Você perdeu a partida!');
    } else {
      Alert.alert('Resultado', 'A partida terminou em empate!');
    }

    setTimeout(() => {
      handleRestartDuel();
    }, 2000);
  };

  const calculateAverageStats = (stats: PokemonStat[]): number => {
    const totalStats = stats.reduce((sum, stat) => sum + stat.base_stat, 0);
    return totalStats / stats.length;
  };

  const compareCards = () => {
    const userCard = userDeck[userCardIndex];
    const botCard = botDeck[botCardIndex];

    if (!userCard || !botCard) {
      Alert.alert('Fim do Duelo', 'O duelo chegou ao fim!');
      return;
    }

    const userAverage = calculateAverageStats(userCard.stats);
    const botAverage = calculateAverageStats(botCard.stats);

    if (userAverage > botAverage) {
      Alert.alert('Vitória', 'Você venceu esta rodada!');
    } else if (userAverage < botAverage) {
      Alert.alert('Derrota', 'Você perdeu esta rodada!');
    } else {
      Alert.alert('Empate', 'Esta rodada terminou em empate!');
    }

    setTimeout(() => {
      handleNextRound();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Duelo Pokémon</Text>
      {!isDuelStarted && (
        <TouchableOpacity onPress={handleStartDuel} style={styles.button}>
          <Text style={styles.buttonText}>Começar Duelo</Text>
        </TouchableOpacity>
      )}
      {isDuelStarted && (
        <View style={styles.duelContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Usuário</Text>
            <Image source={{ uri: userPokemon.sprites.other['official-artwork'].front_default }} style={styles.cardImage} />
            <Text style={styles.cardText}>Stats:</Text>
            {userPokemon.stats.map((stat, index) => (
              <Text key={index} style={styles.cardText}>
                {stat.stat.name}: {stat.base_stat}
              </Text>
            ))}
          </View>
          <Text style={styles.vsText}>VS</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Bot</Text>
            <Image source={{ uri: botPokemon.sprites.other['official-artwork'].front_default }} style={styles.cardImage} />
            <Text style={styles.cardText}>Stats:</Text>
            {botPokemon.stats.map((stat, index) => (
              <Text key={index} style={styles.cardText}>
                {stat.stat.name}: {stat.base_stat}
              </Text>
            ))}
          </View>
          <TouchableOpacity onPress={compareCards} style={styles.button}>
            <Text style={styles.buttonText}>Próxima Rodada</Text>
          </TouchableOpacity>
        </View>
      )}
      {userCardIndex >= userDeck.length - 1 && botCardIndex >= botDeck.length - 1 && (
        <TouchableOpacity onPress={handleRestartDuel} style={styles.button}>
          <Text style={styles.buttonText}>Começar Duelo Novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
