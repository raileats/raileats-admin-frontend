// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://raileats-backend.onrender.com/api', // your deployed backend URL
});

export default API;
