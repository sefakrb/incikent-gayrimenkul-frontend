const axios = require("axios");

const defaultOptions = {
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
let axiosInstance = axios.create(defaultOptions);
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosInstance;