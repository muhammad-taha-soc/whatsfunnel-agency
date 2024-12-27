// src/utils/axios.js
import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://3.76.225.188:5000';
const API_URL =  'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      // Create a new headers object to avoid mutating the original config
      const headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`, // Use dot notation
      };

      // Return a new config object with updated headers
      return {
        ...config,
        headers,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Optional: Handle global responses)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (e.g., token expiration)
    return Promise.reject(error);
  }
);

export default axiosInstance;
