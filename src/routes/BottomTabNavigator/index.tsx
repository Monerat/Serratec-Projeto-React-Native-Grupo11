import { HomeScreen } from '../../screens/HomeScreen';
import { DeckScreen } from '../../screens/DeckScreen';
import { CardScreen } from '../../screens/CardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { AboutScreen } from '../../screens/AboutScreen'
import { DeckProvider } from '../../context/DeckContext';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  HomeScreen: {};
  DeckScreen: { id: string };
  CardScreen: {};
  AboutScreen:{};
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
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards" size={24} color={color} />
          )
        }}
        name="DeckScreen"
        component={DeckScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokeball" size={24} color={color} />
          )
        }}
        name="CardScreen"
        component={CardScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="question" size={20} color='#E04A49' /> 
          )
        }}
        name="AboutScreen"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
}