import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig , AxiosResponse, InternalAxiosRequestConfig } from 'axios';

interface RequestInterceptors {
  requestInterceptor: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestInterceptorCatch: (error: any) => any;
  responseInterceptor: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch: (error: any) => any;
}
interface RequestConfig extends AxiosRequestConfig {
  interceptors: RequestInterceptors
}
class Request {
  instance: AxiosInstance;
  interceptors: RequestInterceptors;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
  }
  request(config:RequestConfig) {
    this.instance.request(config).then(res => {
      console.log(res);
    })
  }
}

export default Request;
