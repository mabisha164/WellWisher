import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000000,
});


// request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken")
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);


// response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    
    return response;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);
