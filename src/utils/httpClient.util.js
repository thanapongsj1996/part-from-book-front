import axios from 'axios'

const httpClient = axios.create({
  timeout: 10000, //10 seconds
})

httpClient.interceptors.request.use(async (config) => {
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
