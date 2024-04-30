import axios from "axios";

const ApiServices = axios.create({
  baseURL: "http://localhost:3000/",
});

export const rickandmortyapi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

// baseURL: "http://192.168.100.168:3000/",

ApiServices.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

ApiServices.interceptors.response.use(
  function (response) {
    // Extract the access token from the response, assuming it's included in the data
    const accessToken = response.data.accessToken;

    // Check if the access token exists and set it in local storage
    if (accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default ApiServices;
