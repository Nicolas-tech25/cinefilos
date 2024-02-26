import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeContainer>
      <View style={estilos.viewLogo}>
        <Image source={logo} style={estilos.logo} />
        <Text style={estilos.titulo}>Cinéfilos</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={12} color="white" /> Buscar Filmes
          </Text>
        </Pressable>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={12} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={12} color="white" /> Privacidade
          </Text>
        </Pressable>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={12} color="white" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewLogo: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 144,
    height: 144,
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
    fontFamily: "NotoSans",
  },
  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 28,
  },
  viewRodape: {
    width: "100%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ff4117",
  },
  botaoRodape: {
    padding: 16,
    alignItems: "center",
  },
});
