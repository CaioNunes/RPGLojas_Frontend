import axios from 'axios';

const axios_ = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export default axios_;