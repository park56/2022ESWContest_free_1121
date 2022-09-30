import axios from "axios";

const baseURL = 'http://10.80.161.228:8080'

export const API = axios.create({
  baseURL,
  timeout: 10000,
});

export const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
});
