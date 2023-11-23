import { Home } from '../../screens/Home';
import { Deck } from '../../screens/Deck';
import { Pokedex } from '../../screens/Pokedex';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import StackNavigator from '../BottomStackNavigator';
import { HistoricoBattle } from '../../screens/HistoricoBattle';
import { Battle } from '../../screens/Battle';
import { About } from '../../screens/About';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: {};
  Deck: { id: string };
  Pokedex: {};
  About:{};
  HistoricoBattle:{};
  Battle:{};
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fdb542', padding: 5, height: 60 },
        tabBarInactiveTintColor: '#e04a49',
        tabBarActiveTintColor: '#38644b',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          )
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards" size={24} color={color} />
          )
        }}
        name="Deck"
        component={Deck}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sword-cross" size={24} color={color} />
          )
        }}
        name="HistoricoBattle"
        component={HistoricoBattle}
      />
      
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokeball" size={24} color={color} />
          )
        }}
        name="Pokedex"
        component={Pokedex}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="question" size={24} color={color} /> 
          )
        }}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
}