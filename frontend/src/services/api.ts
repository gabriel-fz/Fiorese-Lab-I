import axios from 'axios';

import apiConfig from '../config/apiConfig';

const api = axios.create({
  baseURL: apiConfig,
});

export default api;
