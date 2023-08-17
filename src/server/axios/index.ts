import axios, { AxiosInstance } from "axios";


export const config: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
