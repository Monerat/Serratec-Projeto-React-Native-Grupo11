import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { styles } from "./style"
import pokemon from "../../assets/images/pokemon-logo-png-1421.png" 
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import backgroundImg from "../../assets/images/Home.gif"
import imagePokemon from "../../assets/images/marcantePokemon.png"


const data = [
    { id: '1', name: 'Gustavo', github: 'https://github.com/Monerat' },
    { id: '2', name: 'Isaque', github: 'https://github.com/IsaquePerez' },
    { id: '3', name: 'Joedson', github: 'https://github.com/joe-higashii' },
    { id: '4', name: 'Manoel', github: 'https://github.com/VitorLack' },
    { id: '5', name: 'Ricardo', github: 'https://github.com/RicardoCastilho6' },
  ];

export const About = () => {

    const handleGitHubClick = (gitLink) => {
        Linking.openURL(gitLink);
      };

    const renderItem = ({ item }) => (
        <View style={styles.nomeCreditos}>
            <View style={styles.creditos}>
              <MaterialCommunityIcons name="pokeball" size={24} color="#E04A49" />
              <Text style={styles.nomeCreditos}>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleGitHubClick(item.github)}>
            <AntDesign name="github" size={24} color="black" style={styles.gitHub}/>
            </TouchableOpacity>
        </View>
      );

  return (
    
    <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.outContainer}>
        <Image source={pokemon} style={styles.imagePokemon}/>
        <Image source={imagePokemon} style={styles.marcante}/>       
        <View style={styles.boddy}>
            <Text style={styles.text}>Agradecemos por explorar o mundo Pokémon conosco! Este projeto foi possível graças à comunidade,
        aos fãs de Pokémon e à dedicação de todos os envolvidos. Esperamos que tenha uma jornada incrível
        e que continue sua jornada para se tornar um Mestre Pokémon!</Text>
        
        </View>
        
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        contentContainerStyle={styles.container}
      />
      </View>
    </ImageBackground>
  )
}
