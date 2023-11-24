import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { styles } from "./styles"
import pokemon from "../../assets/images/pokemon-logo-png-1421.png"
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import imagePokemon from "../../assets/images/marcantePokemon.png"
import { BackgroundImageHome } from '../../components/BackgroundImageHome';

const data = [
  { id: '1', name: 'Gustavo', github: 'https://github.com/Monerat' },
  { id: '2', name: 'Isaque', github: 'https://github.com/IsaquePerez' },
  { id: '3', name: 'Joedson', github: 'https://github.com/joe-higashii' },
  { id: '4', name: 'Manoel', github: 'https://github.com/VitorLack' },
  { id: '5', name: 'Ricardo', github: 'https://github.com/RicardoCastilho6' },
];

export const About = () => {

  const handleGitHubClick = (gitLink: string) => {
    Linking.openURL(gitLink);
  };

  interface Item {
    id: string;
    name: string;
    github: string;
  }

  const renderItem = ({item}: {item:Item}) => (
    <View style={styles.nomeCreditos}>
      <View style={styles.creditos}>
        <MaterialCommunityIcons name="pokeball" size={24} color="#E04A49" />
        <Text style={styles.textCredito}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={() => handleGitHubClick(item.github)}>
        <AntDesign name="github" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <BackgroundImageHome>
      <View style={styles.outContainer}>
        <View style={styles.logoContainer}>
          <Image source={pokemon} style={styles.logoPokemon} />
        </View>
        <View style={styles.ashContainer}>
          <Image source={imagePokemon} style={styles.ash} />
        </View>
        <View style={styles.agradecimentoContainer}>
          <Text style={styles.textAgradecimento}>Agradecemos por explorar o mundo Pokémon conosco! Este projeto foi possível graças à comunidade,
            aos fãs de Pokémon e à dedicação de todos os envolvidos. Esperamos que tenha uma jornada incrível
            e que continue sua jornada para se tornar um Mestre Pokémon!</Text>
        </View>
        <View style={styles.creditosContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </BackgroundImageHome >
  )
}
