import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    const { token } = localStorage;
    const { headers } = config;
    if (token) {
      headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  },
);
