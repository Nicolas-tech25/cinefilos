import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";

// Criaçã/inicialização do mecanismo STACK
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerStyle: { backgroundColor: "#ff4117" } }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
