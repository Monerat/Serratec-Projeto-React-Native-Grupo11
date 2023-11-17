import * as Font from 'expo-font';

export const CustomFonts = async () =>
  await Font.loadAsync({
    gillBold: require('../assets/fonts/GillSansCondensedBold.otf'),
    gillMedium: require('../assets/fonts/GillSansMedium.otf'),
  });