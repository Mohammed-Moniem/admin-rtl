import axios from 'axios'
import { getItem } from 'src/lib/helpers/storage'

const token = getItem('token')

const http = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + token,
  },
})

const defaultHeader = () => {
  http.interceptors.request.use(
    (config) => {
      const token = getItem('token')
      if (token) {
        config.headers['Authorization'] = token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}

// http.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// http.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default {
  defaultHeader,
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
}
