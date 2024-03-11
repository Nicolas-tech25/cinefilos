import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Empty() {
  const image = require("../../assets/images/nao-encontrado.jpg");
  return (
    <View style={estilos.viewEmpty}>
      <Image resizeMode="cover" style={estilos.imagem} source={image} />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewEmpty: { marginVertical: 8 },
  imagem: {
    height: 250,
    width: 300,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
