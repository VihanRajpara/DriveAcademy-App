import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://driveacademy-backend.onrender.com',
});
// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = AsyncStorage.getItem('token');
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error); 
//   }
// );
export default axiosInstance;
