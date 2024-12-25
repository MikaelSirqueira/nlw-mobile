import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.172.158:3339",
  timeout: 900,
})