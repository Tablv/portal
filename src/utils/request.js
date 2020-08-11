import axios from 'axios'
import { Message } from 'element-ui'

const baseURL = "";

const axiosConfig = {
  baseURL,
  // 超时时间
  timeout: 5000
}

const service = axios.create(axiosConfig);

// 请求拦截
service.interceptors.request.use(
  config => {
    // 拦截内容
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

/**
 * 响应拦截
 */
service.interceptors.response.use(
  response => {
    const { data, status } = response;
    if (status !== 200) {
      Message({
        message: '网络异常',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error({
        message: '网络异常' 
      }))
    } else {
      return Promise.resolve(data)
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 导出request
const request = {

  get: (url, params) => {
    const config = {
      method: 'GET',
      url,
      params: params
    }
    return service(config)
  },

  post: (url, data) => {
    const config = {
      method: 'POST',
      url,
      data: data
    }
    return service(config)
  },

  multipleRequest: (requests) => {
    const reqArray = []
    if (requests.length > 0) {
      for (const req of requests) {
        if (req.method === 'GET') {
          reqArray.push(service.get(baseURL + req.url, { params: req.data }))
        } else if (req.method === 'POST') {
          reqArray.push(service.post(baseURL + req.url, req.data))
        }
      }
      return service.all(reqArray)
    }
  }
}

export default request
