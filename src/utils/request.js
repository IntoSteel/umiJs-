import request from 'umi-request';
import {message} from 'antd'

// request interceptor, change url or options.
// 请求拦截器
request.interceptors.request.use((url, options) => {
  return {
    url: `${url}`,
    options: { ...options, interceptors: true ,headers:{hellow:'isHellow'}},
  };
});

// handling error in response interceptor
// 响应拦截器
request.interceptors.response.use(response => {
  const codeMaps = {
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
		304:'请求请求',
		200:'请求成功'
  };
  message.error(codeMaps[response.status]);
  return response;
});

export default request;