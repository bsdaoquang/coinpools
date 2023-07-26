/*
  This is api router
  get domain at here
  parse to domain
*/

import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };
  config.data;

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    console.log( error.message);
    return error.code;
  },
);

export default axiosClient;
