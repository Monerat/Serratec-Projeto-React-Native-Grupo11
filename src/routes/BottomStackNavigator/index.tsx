import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "../../screens/About";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}