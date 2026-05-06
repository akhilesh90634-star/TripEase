import axios from "axios";

const url = import.meta.env.VITE_APP_BE_API_URL;

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");


  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default api;