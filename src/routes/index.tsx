import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { CardScreen } from '../screens/CardScreen';
import { BottomTabNavigator } from './BottomTabNavigator';

export type RootStackParamList = {
  Home: undefined;
  CardScreen: { idOrName: number | string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
};