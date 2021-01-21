import API from 'api'

import httpClient from 'utils/httpClient.util'
import { responseHandle } from 'utils/responseHandle.util'

// Functions
export const fetchArticles = (page = 1, limit = 5) => {
  const url = `${API.getAllArticles()}?page=${page}&limit=${limit}`
  const request = httpClient.get(url).then((res) => res.data)

  return async (dispatch) => await responseHandle(dispatch, request)
}
