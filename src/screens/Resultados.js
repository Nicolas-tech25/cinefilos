import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apikey } from "../services/api-moviedb";
import { useEffect, useState, React } from "react";

export default function Resultados({ route }) {
  // const terror = 27;
  const [resultados, setResultados] = useState([]);
  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: true,
            language: "pt-BR",
            query: filme,
            api_key: apikey,
          },
        });
        console.log(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme} </Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  texto: {
    marginVertical: 8,
  },
});
