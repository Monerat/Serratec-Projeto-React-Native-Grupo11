import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DigimonScreen from '../screens/DigimonScreen';

export type RootStackParamList = {
  Home: undefined;
  DigimonScreen: { idOrName: number | string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DigimonScreen" component={DigimonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
