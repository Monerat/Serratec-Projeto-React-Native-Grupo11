import React, { useCallback } from "react";
import { Image, View, Text } from "react-native";
import styles from "./styles";
import pokemonLogo from "../../assets/images/pokemon-logo-png-1421.png";
import pokeBall from "../../assets/images/pokeballAnimation.gif";
import { BackgroundImageHome } from "../../components/BackgroundImageHome";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const HomeScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    'gillMedium': require('../../assets/fonts/GillSansMedium.otf'),
    'gillBold': require('../../assets/fonts/GillSansCondensedBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <BackgroundImageHome>
      <View style={styles.container}>
        <Image source={pokemonLogo} style={styles.imageLogo} />
      </View>
      <View style={styles.pokeballContainer} onLayout={onLayoutRootView}>
        <Text style={{ fontFamily: 'gillMedium', fontSize: 30 }}>Psyduck</Text>
        <Text style={{ fontFamily: 'gillBold', fontSize: 30 }}>Psyduck</Text>
        <Image source={pokeBall} style={styles.imagePokeball} />
      </View>
    </BackgroundImageHome>
  );
};
