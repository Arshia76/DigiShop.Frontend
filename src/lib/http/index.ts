import axios from 'axios'
import { Cookies } from 'react-cookie'

const http = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(
  (config) => {
    const accessToken = new Cookies().get('accessToken')
    if (accessToken) {
      config.headers.Authorization = 'Bearer' + ' ' + accessToken
    }
    return config
  },
  (err) => err
)

export { http }
