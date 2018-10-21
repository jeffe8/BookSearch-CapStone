// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

API.interceptors.request.use(function (config) {
// Set common parameters for each request to the API.
// NOTE config.params.APPID = '2fb34a3830a9a3316703d4d5dd4aa762';
// NOTE config.params.units = 'imperial';

return config;
}, function(error) {
    return Promise.reject(error);
});