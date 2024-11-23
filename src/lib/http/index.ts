import axios from 'axios'
import { Cookies } from 'react-cookie'

const http = axios.create({
  baseURL: window.STATIC_URL?.mainApiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: function (params) {
    let result = ''

    result = Object.entries(params)
      .filter((pair) => pair[1])
      .map((pair) => pair.map(encodeURIComponent).join('='))
      .join('&')

    return result
  },
})

http.interceptors.request.use(
  (config) => {
    const accessToken = new Cookies().get('user')?.access_token
    if (accessToken) {
      config.headers.Authorization = 'Bearer' + ' ' + accessToken
    }
    return config
  },
  (err) => err
)

http.interceptors.response.use(null, (err) => {
  throw err.response.data
})

export { http }
