/**
 * 通用AJAX客户端
 */
import axios from 'axios';
import qs from 'querystring';
import { errorHandler, errorNotify } from './apiErrorHandler';
import { ERR_CODE } from '../config';

const ajax = axios.create({
  timeout: 20000
});

ajax.interceptors.request.use((config) => {
  const newConf = {...config };
  // 在这里做请求头定制处理
  if (newConf.contentType === 'form') {
    newConf.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    newConf.data = qs.stringify(newConf.data);
  } else if (config.contentType) {
    newConf.headers['Content-Type'] = newConf.contentType;
    newConf.data = qs.stringify(newConf.data);
  } else {
    newConf.headers['Content-Type'] = 'application/json';
  }
  delete newConf.contentType;
  // headers加参数
  let SESSIONID = window.localStorage.getItem('SESSIONID');
  newConf.headers.common['x-access-token'] = SESSIONID;
  return newConf;
});

ajax.interceptors.response.use((response) => {
  // 在这里可以对返回做统一错误拦截
  const respData = errorHandler(response)
    .then(resp => resp.data)
    .catch((error) => {
      if (response.status !== 200) {
        errorNotify({
          title: '接口状态异常',
          errorMessage: `Http 状态异常 ${response.status}`
        });
        Promise.reject(new Error({ error, errorNotify }));
      } else if (response.data === undefined) {
        errorNotify({
          title: '接口未正确响应请求',
          errorMessage: '接口返回数据为空'
        });
        Promise.reject(new Error({ error, errorNotify }));
      } else if (response.data.status === undefined) {
        errorNotify({
          title: '接口未正确响应请求',
          errorMessage: '返回必要字段status缺失'
        });
        Promise.reject(new Error({ error, errorNotify }));
      } else if (response.data.status !== 0 && response.data.status !== 200) {
        // 可对其他status或者errorCode作特殊处理（登录态失效跳转）
        errorNotify({
          title: '数据异常',
          errorMessage: ERR_CODE[response.data.errorCode] ||
          `errorCode：${response.data.errorCode}<br>errorMessage：${response.data.errorMessage}`
        });
        Promise.reject(new Error({ error, errorNotify }));
      }
    });
  return respData;
}, (error) => {
  Promise.reject(error, errorNotify);
  if (error.message.includes('404')) {
    errorNotify({
      title: '接口状态异常',
      content: 'Http 状态异常 404'
    });
    return;
  }
  if (error.message.includes('Network Error')) {
    errorNotify({
      title: '接口状态异常',
      content: '请求数据失败'
    });
    return;
  }
  throw error;
});

export default ajax;
