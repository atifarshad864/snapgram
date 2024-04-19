import axios from "axios";

const ApiServices = axios.create({
  baseURL: "http://192.168.100.168:3000/",
});

ApiServices.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export default ApiServices;
