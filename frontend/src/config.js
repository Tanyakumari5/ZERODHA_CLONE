// src/config.js
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://zerodha-clone-mmz2.onrender.com"
    : "http://localhost:3002";

export default API_BASE_URL;
