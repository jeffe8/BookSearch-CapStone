// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

API.interceptors.request.use(function (config) {
// Set common parameters for each request to the API.
config.params.APPID = 'AIzaSyAEtKsm-i2k83YtTpz4Z4fKDAbAnn1EDv0';
// NOTE config.params.units = 'imperial';

return config;
}, function(error) {
    return Promise.reject(error);
});