// utils/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://foodstore-backend-production.up.railway.app", // Express backend base URL
});

export default api;
