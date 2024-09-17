import Request from "./request";
import {VITE_APP_URL, TIME_OUT} from './request/config'
const request = new Request({
  baseURL:VITE_APP_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log(config)
      return config;
    },
    requestInterceptorCatch(error) {
      console.log(error);
    },
    responseInterceptor: (res) => {
      console.log(res);
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log(err);
      return err;
    }
  }
});
export default request;
