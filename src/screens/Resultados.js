import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apikey } from "../services/api-moviedb";
import { useEffect, useState, React } from "react";
import CardFilme from "../components/CardFilme";
import Separador from "../components/Separador";
import Empty from "../components/Empty";

export default function Resultados({ route }) {
  // const terror = 9648;
  const [resultados, setResultados] = useState([]);
  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;
  const [loading, setLoading] = useState(true);

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
        setResultados(resposta.data.results);
        setLoading(false);
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
        {loading && <ActivityIndicator size="large" color="#ff4117" />}
        {!loading && <View style={estilos.viewFilmes}></View>}
        <View style={estilos.viewFilmes}>
          <FlatList
            //Prop data apontando para o state contendo os dados para flatList
            data={resultados}
            //Extraindo cada registro/item/Filme único
            keyExtractor={(item) => item.id}
            // Prop que irá renderizar cada item/filme em um componente
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            ListEmptyComponent={Empty}
            ItemSeparatorComponent={Separador}
          />
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    viewFilmes: { marginVertical: 8 },
    flex: 1,
    padding: 16,
    width: "100%",
  },
  texto: {
    marginVertical: 8,
  },
});
