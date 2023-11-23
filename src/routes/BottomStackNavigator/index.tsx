import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "../../screens/About";
import { Battle } from "../../screens/Battle";
import { BottomTabNavigator } from "../BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function BottomStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNavigator} />
      <Stack.Screen name="Battle" component={Battle} />
    </Stack.Navigator>
  );
}