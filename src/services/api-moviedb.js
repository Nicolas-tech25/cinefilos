import axios from "axios";
/* Usamos o axios para criar uma referências ao endpoint da api/service e cnfiguramos também o uso da api */
const apikey = process.env.EXPO_PUBLIC_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, apikey };
