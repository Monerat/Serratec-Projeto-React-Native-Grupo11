import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import pokeBall from "../../assets/images/pokeballAnimation.gif";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";
import { ModalSprite } from "../../components/Modal/ModalWhosThatPokemon";
import { Pokemon, getPokemon } from "../../services/api";
import { Audio } from "expo-av";
import WhosThatPokemon from "../../assets/music/whos-that-pokemon.mp3";
import PokemonIntro from "../../assets/music/pokemon-intro.mp3";
import ThemeSound from "../../assets/music/pokemon-theme-song.mp3";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const Home = ({ pokemon }: PokemonCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedSprite, setSelectedSprite] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState("");
  const [fallingAnimation] = useState(new Animated.Value(-300));
  const [pokeballAnimation] = useState(new Animated.Value(0));
  const [sound, setSound] = React.useState<Audio.Sound | undefined>(undefined);
  const [introSound, setIntroSound] = React.useState();
  const introSoundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const startFallingAnimation = async () => {
      introSoundRef.current = new Audio.Sound();
      await introSoundRef.current.loadAsync(PokemonIntro);
      await introSoundRef.current.setVolumeAsync(0.1);

      Animated.timing(fallingAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();

      await introSoundRef.current.playAsync();
      
      setTimeout(() => {
        Animated.timing(pokeballAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      }, 1000);
    };

    startFallingAnimation();

    return () => {
      if (introSoundRef.current) {
        introSoundRef.current.unloadAsync();
      }
    };
  }, [fallingAnimation, pokeballAnimation]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(WhosThatPokemon);
    setSound(sound);

    await sound.playAsync();
  }

  const handlePokeballClick = async () => {
    const totalPokemons = 100;
    const randomPokemon = Math.floor(Math.random() * totalPokemons + 1);

    const response = await getPokemon(randomPokemon);
    const spriteUrl =
      response.data.sprites.other["official-artwork"].front_default;
    setSelectedSprite(spriteUrl);
    setIsModalVisible(true);
    const selectedName = response.data.name;
    setSelectedName(selectedName);
    console.log(response.data.name);

    playSound();
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <BackgroundImageHome>
      <Animated.Image
        source={pokemonLogo}
        style={[styles.imageLogo, { top: fallingAnimation }]}
      />
      <View style={styles.pokeballContainer}>
        {!isModalVisible && (
          <TouchableOpacity onPress={handlePokeballClick}>
            <Animated.Image
              source={pokeBall}
              style={[
                styles.imagePokeball,
                {
                  transform: [
                    {
                      translateY: pokeballAnimation.interpolate({
                        inputRange: [0, 0.5, 1, 1.5],
                        outputRange: [-500, 300, 100, 200],
                      }),
                    },
                    {
                      scale: pokeballAnimation.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [0.5, 1.2, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>

      <ModalSprite
        isVisible={isModalVisible}
        spriteUrl={selectedSprite || ""}
        onClose={handleCloseModal}
        name={selectedName}
      />
    </BackgroundImageHome>
  );
};
