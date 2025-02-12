import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://e38b-102-86-12-63.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
