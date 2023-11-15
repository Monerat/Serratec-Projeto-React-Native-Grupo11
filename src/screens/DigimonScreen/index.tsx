import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { getDigimonDetails } from '../../services/api';
import styles from './styles';
import BackgroundImage from '../../components/BackgroundImage';

export interface DigimonScreenProps {
  route: { params: { idOrName: number | string } };
}

const DigimonScreen: React.FC<DigimonScreenProps> = ({ route }) => {
  const { idOrName } = route.params;
  const [digimon, setDigimon] = useState<any>(null);

  useEffect(() => {
    getDigimonDetails(String(idOrName))
      .then((response) => {
        setDigimon(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Digimon details:', error);
      });
  }, [idOrName]);

  if (!digimon) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <BackgroundImage>
    <ScrollView style={styles.container}>
      <Image source={{ uri: digimon.images[0].href }} style={styles.image} />
      <Text style={styles.name}>{digimon.name}</Text>
      <Text style={styles.label}>Level: {digimon.levels[0].level}</Text>
      <Text style={styles.label}>Types: {digimon.types.map((type: any) => type.type).join(', ')}</Text>
      <Text style={styles.label}>Attributes: {digimon.attributes.map((attribute: any) => attribute.attribute).join(', ')}</Text>
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
      {digimon.priorEvolutions.map((evolution: any) => (
        <View key={evolution.id} style={styles.evolutionContainer}>
          <Image source={{ uri: evolution.image }} style={styles.evolutionImage} />
          <Text>{evolution.digimon}</Text>
          <Text>{evolution.condition}</Text>
        </View>
      ))}

      <Text style={styles.sectionHeader}>Next Evolution:</Text>
      {digimon.nextEvolutions.map((evolution: any) => (
        <View key={evolution.id} style={styles.evolutionContainer}>
          <Image source={{ uri: evolution.image }} style={styles.evolutionImage} />
          <Text>{evolution.digimon}</Text>
          <Text>{evolution.condition}</Text>
        </View>
      ))}
    </ScrollView>
    </BackgroundImage>
  );
};

export default DigimonScreen;
