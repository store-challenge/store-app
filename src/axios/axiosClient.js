import axios from "axios";

const baseUrl = "";

const axiosClient = axios.create({
  baseURL: baseUrl, //.env
});


export default axiosClient