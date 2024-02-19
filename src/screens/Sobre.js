import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import tmdb from "../../assets/images/logo-tmdb.png";
import { Linking } from "react-native";

export default function Sobre() {
  const abrirSiteTMDb = () => {
    Linking.openURL("https://www.themoviedb.org/?language=pt-BR");
  };
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView>
          <Text style={estilos.subtitulo}>Sobre o app Cinéfilos</Text>
          <Text style={estilos.texto}>
            O <Text style={estilos.nomeApp}>Cinéfilos</Text> é um aplicativo com
            a finalidade de permitir a busca por informações sobre filmes
            existentes na base de dados pública disponibilizada pelo site The
            Movie Database (TMDb).
          </Text>
          <Pressable style={estilos.AbrirSite} onPress={abrirSiteTMDb}>
            <Image source={tmdb} style={estilos.imagem} />
          </Pressable>
          <Text style={estilos.texto}>
            Ao localizar um filme, o usuário pode visualizar informações como
            título, data de lançamento, nota média de avaliação e uma breve
            descrição sobre o filme e, caso queira, salvar estas informações em
            uma lista no próprio aplicativo para visualização posterior.
          </Text>
          <Text style={estilos.texto}>
            O aplicativo poderá receber novos recursos conforme o feedback e
            demanda dos usuários.
          </Text>
          <Text style={estilos.texto}>
            <Text style={estilos.nomeApp}>Cinéfilos</Text> &copy; 2024
          </Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  AbrirSite: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imagem: {
    width: 180,
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#ff4117",
  },
});
