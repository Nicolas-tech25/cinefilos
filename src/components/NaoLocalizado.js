import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function NaoLocalizado() {
  const imagem = require("../../assets/images/nao-encontrado.jpg");
  return (
    <View>
      <Image style={estilos.imagem} source={imagem} />
      <Text style={estilos.vazio}>Ops! Nenhum filme localizado!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  vazio: {
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },

  imagem: {
    width: 360,
    height: 400,
  },
});
