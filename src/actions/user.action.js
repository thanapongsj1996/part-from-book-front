import API from 'api'

import httpClient from 'utils/httpClient.util'
import { responseHandle } from 'utils/responseHandle.util'

// Functions
export const login = (body) => {
  const url = API.login()
  const request = httpClient.post(url, body).then((res) => res.data)

  return async (dispatch) => await responseHandle(dispatch, request)
}
