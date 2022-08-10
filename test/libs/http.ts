import axios from 'axios';
import { getCookie, removeCookie } from './cookies';
import storage from './storage';
import message from '../components/Message';

axios.defaults.timeout = 100000;
// dev 走本地代理
axios.defaults.baseURL = "";
// axios.defaults.baseURL = process.env.REACT_APP_HTTP;

// TODO 需要更改签名
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      'signature': 'temp test',
      token: getCookie('ua_once') || getCookie('ua_user'),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    const resp = response.data || null;
    // 4xx & 3xx redirect to login ，200 & 201 is success
    if (/^4\d{2}$/.test(response.status)) {
      removeCookie('ua_once');
      removeCookie('ua_user');
      storage.clear();
      window.self.location.href = window.location.origin + '/login';
    } else if (/^3\d{2}$/.test(response.status)) {
      window.self.location.href = window.location.origin;
    } else if (resp.code === 1) {
      Object.assign(resp.data, { code: resp.code });
      message.info(resp.message);
    } else if (resp.code === 4001) {
      Object.assign(resp.data, { code: resp.code });
      message.info('Invalid token');
      removeCookie('ua_once');
      removeCookie('ua_user');
      storage.clear();
      if (window.location.pathname.includes('hd-')) {
        window.self.location.href = window.location.origin + '/hd-login';
      } else {
        let redirect = '';
        if (window.location.href.includes('market')) {
          redirect =
            '?redirect=' + window.location.pathname + window.location.search;
        }
        window.self.location.href =
          window.location.origin + '/login' + redirect;
      }
    } else if (resp.code === 4002) {
      window.self.location.href = window.location.origin + '/login-phone';
    } else if (resp.code === 3001) {
      window.self.location.href = window.location.origin + '/google-register';
    } else if (resp.code === 2001) {
      Object.assign(resp.data, { code: resp.code, message: resp.message });
      // message.info('Insufficient account amount');
    } else if (resp.code === 2011) {
      Object.assign(resp.data, { code: resp.code, message: resp.message });
      // message.info('Insufficient account amount');
    } else if (resp.code === 2011) {
      Object.assign(resp.data, { code: resp.code });
    }
    return resp;
  },
  (error) => {
    // storage.clear();
    // window.self.location.href = window.location.origin;
    message.info('server error');
    console.log('request error：', error);
  }
);

export  function get(url: string, params = {}) {

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function post(url: string, data: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export function patch(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        mssage(error);
        reject(error);
      }
    );
  });
}

export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        mssage(error);
        reject(error);
      }
    );
  });
}

export default function (fecth: string, url: string, param: any) {
  let _data = '';
  return new Promise((resolve, reject) => {
    switch (fecth) {
      case 'get':
        get(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log('get request GET failed.', error);
            reject(error);
          });
        break;
      case 'post':
        post(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log('get request POST failed.', error);
            reject(error);
          });
        break;
      default:
        break;
    }
  });
}

function mssage(err: any) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log(err.response.data.error.details);
        break;
      case 401:
        console.log('未授权，请登录');
        break;
      case 403:
        console.log('拒绝访问');
        break;
      case 404:
        console.log('请求地址出错');
        break;
      case 408:
        console.log('请求超时');
        break;
      case 500:
        console.log('服务器内部错误');
        break;
      case 501:
        console.log('服务未实现');
        break;
      case 502:
        console.log('网关错误');
        break;
      case 503:
        console.log('服务不可用');
        break;
      case 504:
        console.log('网关超时');
        break;

      case 505:
        console.log('HTTP版本不受支持');
        break;
      default:
    }
  }
}
