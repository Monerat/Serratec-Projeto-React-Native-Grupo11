import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './BottomTabNavigator';

export type RootStackParamList = {
  Home: undefined;
  CardScreen: { idOrName: number | string };
};

export const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
};