import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://669165b526c2a69f6e8fa0d0.mockapi.io/api/v1/',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// for error handling
axiosInstance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosInstance;