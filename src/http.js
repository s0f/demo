/**
 * Created by ssf on 2017/5/3.
 */
import axios from 'axios';
import store from './store/index';
// import type from './store/types';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = store.state.token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // store.commit(type.LOGOUT);
                window.location.href = 'http://localwx.piapiaclub.com:8080/login.do?returnURL=' + window.location.href;
            }
        }
        return Promise.reject(error.response.data);
    }
);

export default axios;
