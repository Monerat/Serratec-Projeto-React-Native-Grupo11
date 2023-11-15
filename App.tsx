import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DigimonScreen, { DigimonScreenProps } from './src/screens/DigimonScreen';

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen
         name="DigimonScreen"
         component={DigimonScreen as React.ComponentType<DigimonScreenProps>}
       />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
