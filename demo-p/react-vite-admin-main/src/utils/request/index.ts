import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { AxiosCanceler } from './axiosCancel';
import { checkStatus } from './checkStatus';
import { message } from 'antd';

enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 10001,
  TIMEOUT = 6000,
  TYPE = 'success',
}

interface Result {
  code: number;
  message: string;
}

interface ResultData<T = unknown> extends Result {
  data?: T;
}
const axiosCanceler = new AxiosCanceler();

const config = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: ResultEnum.TIMEOUT as number,
  withCredentials: true,
};

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);

    /**
     * @description 请求拦截器
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        axiosCanceler.addPending(config);
        const token: string | null = '';
        return { ...config, headers: { token } };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    /**
     * @description 响应拦截器
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        // * 在请求结束后，移除本次请求
        axiosCanceler.removePending(config);
        // * 登陆失效操作
        if (data.code === ResultEnum.OVERDUE) {
          message.error(data.message);
          return Promise.reject(data);
        }
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          return Promise.reject(data);
        }
        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        if (response) return checkStatus(response.status);
        if (!window.navigator.onLine) return;
        return Promise.reject(error);
      },
    );
  }
}

const request = new RequestHttp(config);
export const get = <T>(url: string, params = {}, _object = {}): Promise<ResultData<T>> =>
  request.service.get(url, { params, ..._object });
export const post = <T>(url: string, params = {}, _object = {}): Promise<ResultData<T>> =>
  request.service.post(url, params, _object);
export const put = <T>(url: string, params = {}, _object = {}): Promise<ResultData<T>> =>
  request.service.put(url, params, _object);
export const del = <T>(url: string, params = {}, _object = {}): Promise<ResultData<T>> =>
  request.service.delete(url, { params, ..._object });
export default request;
