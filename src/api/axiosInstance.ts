import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  withCredentials: true, // if using cookies (auth)
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
