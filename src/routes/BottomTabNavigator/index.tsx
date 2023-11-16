import { HomeScreen } from '../../screens/HomeScreen';
import { DeckScreen } from '../../screens/DeckScreen';
import { CardScreen } from '../../screens/CardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  HomeScreen: {};
  DeckScreen: {};
  CardScreen: {};
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1f2127', padding: 5, height: 60 },
        tabBarInactiveTintColor: '#7e868c',
        tabBarActiveTintColor: '#009dfe',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <></>
          )
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <></>
          )
        }}
        name="DeckScreen"
        component={DeckScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <></>
          )
        }}
        name="CardScreen"
        component={CardScreen}
      />
    </Tab.Navigator>
  );
}