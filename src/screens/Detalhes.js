import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Detalhes({ route }) {
  const { filme } = route.params;
  const { title, vote_average, release_date, overview, backdrop_path } = filme;

  const formataData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={
            backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
                }
              : imagemAlternativa
          }
        >
          <Text style={estilos.titulo}>{title}</Text>
        </ImageBackground>
        <View style={estilos.conteudo}>
          <ScrollView>
            <View style={estilos.areaDetalhes}>
              <Text style={estilos.texto}>
                <Fontisto name="like" size={24} color="#ff4117" />{" "}
                {vote_average}
              </Text>
              <Text style={estilos.texto}>
                <Ionicons name="calendar" size={23} color="#ff4117" />{" "}
                {release_date ? formataData(release_date) : "Indisponível"}
              </Text>
            </View>
            <Text style={estilos.texto}>
              <Text style={estilos.sinopse}>Sinopse:</Text>{" "}
              {overview || (
                <Text style={{ fontStyle: "italic" }}>Filme sem descrição</Text>
              )}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
    padding: 8,
  },
  imagemFundo: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  conteudo: {
    padding: 16,
    flex: 1 /* Apenas para garantir a ocupação do espaço caso de texto muito grande */,
  },
  texto: {
    paddingVertical: 4,
    fontSize: 16,
  },
  areaDetalhes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  sinopse: { color: "#ff4117" },
});
