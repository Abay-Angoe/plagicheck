import axios from 'axios';

const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
});

export const refreshToken = async () => {
  try {
    const resp = await api.get('/auth/refresh', { withCredentials: true });
    console.log('refresh token', resp.data);
    return resp.data;
  } catch (e) {
    console.log('Error', e);
  }
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const resp = await refreshToken();

      const { access_token: accessToken } = resp.data;

      // addTokenToLocalStorage(access_token);
      localStorage.setItem('accessToken', accessToken);
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
