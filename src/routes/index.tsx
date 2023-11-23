import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './BottomTabNavigator';
import BottomStackNavigator from './BottomStackNavigator';

export type RootStackParamList = {
  Home: undefined;
  CardScreen: { idOrName: number | string };
};

export const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <BottomStackNavigator />
      </NavigationContainer>
    </>
  );
};