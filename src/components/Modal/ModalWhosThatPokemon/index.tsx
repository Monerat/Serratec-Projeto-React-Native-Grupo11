import React, { useEffect, useState } from "react";
import { Image, Modal, TouchableOpacity, View, ActivityIndicator, Text } from "react-native";
import styles from "./styles";
import QuemEEssePokemon from "../../../assets/images/whos-that-pokemon.png";
import { useFonts } from 'expo-font';
import { Pokemon, getPokemon } from "../../../services/api/";
import { Audio } from 'expo-av'
import WhosThatPokemon from '../../../assets/music/whos-that-pokemon-instrumental.mp3'

interface ModalSpriteProps {
  isVisible: boolean;
  spriteUrl: string;
  name: string;
  onClose: () => void;
}

export const ModalSprite: React.FC<ModalSpriteProps> = ({
  isVisible,
  spriteUrl,
  name,
  onClose,
}) => {
  const [isBlackTint, setIsBlackTint] = useState(false);
  const [fontsLoaded] = useFonts({
    'pokemonFont': require('../../../assets/fonts/pokemon-solid.ttf')
  })
  const [pokemonName, setPokemonName] = useState('')
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(WhosThatPokemon);
    setSound(sound);

    await sound.playAsync();
  }

  const handleImageClick = () => {
    setIsBlackTint(false)
    setPokemonName(name)
    playSound();
    console.log(name)
  }

  useEffect(() => {
    if(!isVisible) {
      setIsBlackTint(true);
    }
    setPokemonName('')
  }, [isVisible])

  const handleClose = () => {
    onClose();
  }

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.modal}>
        <View style={styles.containerHeader}>
          <Image source={QuemEEssePokemon} style={styles.imageLogo} />
        </View>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleImageClick} style={styles.spriteImage}>
            <Image source={{ uri: spriteUrl }} style={[styles.spriteImage, {tintColor: isBlackTint ? 'black' : undefined }]}/>
          </TouchableOpacity>
          <View style={styles.modalTextContainer}>
          <Text style={[styles.pokemonTextStyle, { fontFamily: 'pokemonFont' }]}>
            {pokemonName}
          </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
