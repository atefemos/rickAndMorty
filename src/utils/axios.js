import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/",
  headers: {
    "content-type": "application/json",
  },
  data: JSON.stringify(),
});
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status <= 400) {
        toast("Bad Request!", "", "server", "error");
      } else if (error.response.status <= 500 || error.response.status === 0) {
        toast("Server Error!", "", "server", "error");
      }
    }
    return toast("Network error!", "", "server", "error");
  }
);
export default axiosInstance;
