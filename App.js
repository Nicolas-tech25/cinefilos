import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Text>Cinéfilos</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.rodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#59515E",
    flex: 1,
    justifyContent: "space-around",
    paddingLeft: 50,
    paddingRight: 50,
  },
  viewLogo: {
    backgroundColor: "lightyellow",
    flex: 3,
  },
  viewBotoes: {
    backgroundColor: "lightblue",
    flex: 2,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rodape: {
    backgroundColor: "orange",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.5,
  },
});
