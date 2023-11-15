import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getDigimonDetails } from '../../services/api';
import { RootStackParamList } from '../../routes';
import styles from './styles';
import BackgroundImage from '../../components/BackgroundImage';

type DigimonScreenRouteProp = RouteProp<RootStackParamList, 'DigimonScreen'>;

const DigimonScreen: React.FC = () => {
  const route = useRoute<DigimonScreenRouteProp>();
  const { idOrName } = route.params;
  const [digimon, setDigimon] = useState<any | null>(null);

  useEffect(() => {
    getDigimonDetails(String(idOrName))
      .then((response) => {
        setDigimon(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as informações do Digimon:", error);
      });
  }, [idOrName]);

  if (!digimon) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <BackgroundImage>
      <ScrollView style={styles.container}>
        <Image source={{ uri: digimon.images[0].href }} style={styles.image} />
        <Text style={styles.name}>{digimon.name}</Text>
        <Text style={styles.label}>Level: {digimon.levels[0].level}</Text>
        <Text style={styles.label}>
          Types: {digimon.types.map((type: any) => type.type).join(", ")}
        </Text>
        <Text style={styles.label}>
          Attributes:{" "}
          {digimon.attributes
            .map((attribute: any) => attribute.attribute)
            .join(", ")}
        </Text>
        <Text style={styles.label}>Origin: {digimon.origin}</Text>
        <Text style={styles.label}>Description: {digimon.description}</Text>

        <Text style={styles.sectionHeader}>Skills:</Text>
        {digimon.skills.map((skill: any) => (
          <View key={skill.id} style={styles.skillContainer}>
            <Text style={styles.skillName}>{skill.skill}</Text>
            <Text>{skill.description}</Text>
          </View>
        ))}

        <Text style={styles.sectionHeader}>Prior Evolutions:</Text>
        {digimon.priorEvolutions.map((evolution: any, index: number) => (
          <View
            key={`prior_${evolution.id || index}`}
            style={styles.evolutionContainer}
          >
            <Image
              source={{ uri: evolution.image }}
              style={styles.evolutionImage}
            />
            <Text>{evolution.digimon}</Text>
            <Text>{evolution.condition}</Text>
          </View>
        ))}

        <Text style={styles.sectionHeader}>Next Evolution:</Text>
        {digimon.nextEvolutions.map((evolution: any, index: number) => (
          <View
            key={`next_${evolution.id || index}`}
            style={styles.evolutionContainer}
          >
            <Image
              source={{ uri: evolution.image }}
              style={styles.evolutionImage}
            />
            <Text>{evolution.digimon}</Text>
            <Text>{evolution.condition}</Text>
          </View>
        ))}
      </ScrollView>
    </BackgroundImage>
  );
};

export default DigimonScreen;
