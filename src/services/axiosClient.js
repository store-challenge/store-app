import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const axiosClient = axios.create({
  baseURL: baseUrl, // .env
});

export default axiosClient;
