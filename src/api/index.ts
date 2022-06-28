import axios from 'axios';
import env from '@/config/env';

interface reqParams {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  url: string;
  data: {}; //data 안에 body, params 뭘로 해야할지 타입 찾아보기
  headers?: {};
}

const baseURL = __DEV__ ? env.DEV_URL : env.PROD_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

const req = async ({ method, url, data, headers }: reqParams) => {};

export default axiosInstance;
