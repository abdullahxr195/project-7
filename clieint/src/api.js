import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    Authorization: "Bearer ${tokens}",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);
