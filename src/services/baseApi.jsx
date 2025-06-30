import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const axiosInstances = axios.create({
  baseURL: "https://gamma-api.vercel.app/api",
  timeout: 10000,
  headers,
});

axiosInstances.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstances.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstances;
