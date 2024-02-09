import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "./assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
  });
  /* Função atrelada ao hook useCallback
  Quando uma função está conectada ao useCallback, garantidos que a referência dela é armazenada na memória somente uma vez  */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos a splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}>Cinéfilos</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={12} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={12} color="gold" />
              Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#f4fcff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 125,
    height: 125,
  },
  viewLogo: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  viewBotoes: {
    gap: 20,
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  botao: {
    padding: 16,
    backgroundColor: "#ff4117",
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
  },
  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 28,
  },
  viewRodape: {
    width: "80%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
