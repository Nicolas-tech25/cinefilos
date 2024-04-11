import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
  Vibration,
} from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

/* Hook necessário poisnão estamos em uma tela com acesso as props */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  const { title, poster_path } = filme;

  /* Acessar recursos de navegação */
  const navigation = useNavigation();
  const salvar = async () => {
    try {
      /* 1) Verificar os favoritos armazenados no azyncStorage */
      const filmesFavoritos = await AsyncStorage.getItem("@favoritoscinefilos");
      /* 2) Criar uma lista de filmes favoritos (dados) */
      const listaDeFilmes = filmesFavoritos ? JSON.parse(filmesFavoritos) : [];
      /* 3) Verificar se já tem algum filme na lista */
      const jaTemFilme = listaDeFilmes.some((filmeNaLista) => {
        return filmeNaLista.id === filme.id;
      });
      /* 4) Se o filme não estiver na lista, então coloque */
      if (jaTemFilme) {
        Alert.alert("Ops!", "Você já salvou este filme");
        Vibration.vibrate();
        return;
      }
      /* 4.2) */
      listaDeFilmes.push(filme);
      /* 5) Usamos o AsyncStorage para gravar no armazenamento offline do dispositivo */
      await AsyncStorage.setItem(
        "@favoritoscinefilos",
        JSON.stringify(listaDeFilmes)
      );

      Alert.alert("Favoritos", `${title} foi salvo com sucesso!`);
    } catch (error) {
      console.log("Erro:" + error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar filme...");
    }
  };

  return (
    <View style={estilos.card}>
      <Image
        resizeMode="cover"
        style={estilos.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>
              {" "}
              <Entypo name="open-book" size={12} color="black" /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              {" "}
              <MaterialIcons
                name="data-saver-on"
                size={12}
                color="black"
              />{" "}
              Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#ff4117",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#ff4117",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    borderColor: "#ff4117",
    borderWidth: 1,
    padding: 8,
  },
  textoBotao: {
    color: "#ff4117",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
