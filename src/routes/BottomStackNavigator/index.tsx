import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../../screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
