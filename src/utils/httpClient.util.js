import axios from 'axios'

import { cookies } from 'index'
import { COOKIE_STORAGE } from 'global/constants/storage.const'

const httpClient = axios.create({
  timeout: 10000, //10 seconds
})

httpClient.interceptors.request.use(async (config) => {
  // config.headers = {
  //   Authorization: cookies.get(COOKIE_STORAGE.TOKEN_KEY),
  // }

  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error
    return Promise.reject(response)
  }
)

export default httpClient
