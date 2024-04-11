import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("../../assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
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
    <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
      {children}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#f4fcff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
