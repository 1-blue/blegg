import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

/** 2023/06/19 - axios instance - by 1-blue */
const axiosInstance = axios.create({
  baseURL: SERVER_URL + "/api",
  timeout: 1000,
  withCredentials: true,
});

export default axiosInstance;
