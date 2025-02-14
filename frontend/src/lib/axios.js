import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-backend-seven-virid.vercel.app" : "/api",
  withCredentials: true,
});
