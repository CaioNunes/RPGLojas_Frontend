import axios from 'axios';
import { getToken } from "./auth";

const axios_ = axios.create({
     baseURL: process.env.REACT_APP_API_URL,
     responseType: 'json'
    });

axios_.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default axios_;