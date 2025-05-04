// utils/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Express backend base URL
});

export default api;
