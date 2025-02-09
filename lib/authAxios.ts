import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/";
// Get refresh token and access token from local storage
const refreshToken = localStorage.getItem("refresh_token");
const accessToken = localStorage.getItem("access_token");

// Create axios instance with refresh token and access token in headers
export const authInstance = axios.create({
  baseURL: "https://cinema-vmbf.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    refresh: refreshToken,
    access: accessToken,
  },
});
