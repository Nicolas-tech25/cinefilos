import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
  Vibration,
} from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BuscarFilmes({ navigation }) {
  const [filme, setFilme] = useState("");

  const verificacao = (text) => {
    setFilme(text);
  };

  const buscar = () => {
    if (filme === "") {
      Vibration.vibrate(500);
      Alert.alert("Atenção", "Por favor, digite o nome do filme.");
      return;
    }
    /* Redirecionando para a tela de resultados passando o filme pra ela */
    navigation.navigate("Resultados", { filme });
  };
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.titulo}>
          Star Treck? O poderoso Chefão? A trilogia Senhor dos Anéis?
        </Text>
        <Text style={estilos.subtitulo}>
          Localize um filme que você viu ou gostaria de ver!
        </Text>
        <View style={estilos.areaBusca}>
          <MaterialCommunityIcons
            name="movie-open-star"
            size={24}
            color="#ff4117"
          />
          <TextInput
            style={estilos.input}
            onSubmitEditing={buscar}
            onChangeText={verificacao}
            value={filme}
            placeholder="Digite o nome do filme"
          />
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao} onPress={buscar}>
            <Text style={estilos.textoBotao}>
              <Ionicons
                onPress={buscar}
                name="search"
                size={12}
                color="white"
              />{" "}
              Buscar Filmes
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 14,
    marginVertical: 8,
  },
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontSize: 14,
    marginVertical: 8,
  },
  texto: {
    marginVertical: 8,
  },
  viewBotoes: {
    gap: 20,
    flex: 2,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  botao: {
    padding: 12,
    backgroundColor: "#ff4117",
    borderRadius: 5,
    width: "50%",
    color: "#ffff",
    alignItems: "center",
  },
  textoBotao: { color: "#ffff" },
  input: {
    height: 30,
    borderColor: "#ff4117",
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "86%",
  },
  areaBusca: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
});
