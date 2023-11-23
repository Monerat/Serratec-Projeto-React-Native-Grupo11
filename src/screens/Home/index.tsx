import React, { useState } from "react";
import { Image, TouchableOpacity, View, } from "react-native";
import styles from "./styles";
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import pokeBall from "../../assets/images/pokeballAnimation.gif";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";
import { ModalSprite } from "../../components/Modal/ModalWhosThatPokemon";
import { Pokemon, getPokemon } from "../../services/api";
import { Audio } from 'expo-av'
import WhosThatPokemon from '../../assets/music/whos-that-pokemon.mp3'

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const Home = ({ pokemon }: PokemonCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedSprite, setSelectedSprite] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState('')
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(WhosThatPokemon);
    setSound(sound);

    await sound.playAsync();
  }

  const handlePokeballClick = async () => {
    const totalPokemons = 100;
    const randomPokemon = Math.floor(Math.random() * totalPokemons + 1)

    const response = await getPokemon(randomPokemon)
    const spriteUrl = response.data.sprites.other["official-artwork"].front_default;
    setSelectedSprite(spriteUrl);
    setIsModalVisible(true)
    const selectedName = response.data.name
    setSelectedName(selectedName)
    console.log(response.data.name)
    playSound();
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
  }

  return (
    <BackgroundImageHome>
      <View style={styles.container}>
        <Image source={pokemonLogo} style={styles.imageLogo} />
      </View>
      <View style={styles.pokeballContainer}>
        {!isModalVisible && (
        <TouchableOpacity onPress={handlePokeballClick}>
        <Image source={pokeBall} style={styles.imagePokeball} />
        </TouchableOpacity>
        )}
      </View>

      <ModalSprite
      isVisible={isModalVisible}
      spriteUrl={selectedSprite || ''}
      onClose={handleCloseModal}
      name={selectedName}
      />
    </BackgroundImageHome>
  );
};
