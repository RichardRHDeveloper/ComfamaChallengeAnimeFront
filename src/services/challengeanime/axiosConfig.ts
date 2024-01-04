import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ResponseApiInterface } from '../../interfaces/generals';
import { DataApiAnimeInterface } from '../../interfaces/challengeAnime';

const baseURL = process.env.REACT_APP_CHALLENGE_ANIME || 'http://localhost:9000/jikan';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ResponseApiInterface<DataApiAnimeInterface | null>>) => {
    return response;
  },
  (error: AxiosError) => {
    console.error('Error in HTTP request:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
