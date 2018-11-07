

import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

API.interceptors.request.use(function (config) {
config.params.APPID = 'AIzaSyAEtKsm-i2k83YtTpz4Z4fKDAbAnn1EDv0';


return config;
}, function(error) {
    return Promise.reject(error);
});