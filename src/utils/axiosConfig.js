import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tidoy-backend-2-l1cj.onrender.com",
});

export default axiosInstance;
