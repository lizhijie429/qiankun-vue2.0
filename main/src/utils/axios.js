import axios from "axios";

const axiosConfig = {
  baseURL: "/api",
  timeout: 2500,
};

const http = axios.create(axiosConfig);
http.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
