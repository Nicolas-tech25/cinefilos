import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import logo from "./assets/images/logo.png";
import Feather from "@expo/vector-icons";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>Cinéfilos</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Feather name="search" size={16} color="white" />
            Buscar Filmes
          </Pressable>
          <Pressable style={estilos.botao}></Pressable>
        </View>
        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Privacidade</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Sobre</Text>
          </Pressable>
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
    width: 250,
    height: 250,
  },
  viewLogo: {
    flex: 3,
    justifyContent: "flex-end",
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
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#ff4117",
    borderRadius: 5,
    width: "40%",
  },
  textoBotao: {
    color: "#fff",
  },
  viewRodape: {
    width: "80%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
