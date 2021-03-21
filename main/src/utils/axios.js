import axios from "axios";

const config = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 2500,
};

const http = axios.create(config);
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
