import API from 'api'

import { cookies } from 'index'
import httpClient from 'utils/httpClient.util'
import { responseHandle } from 'utils/responseHandle.util'
import { jwtToData } from 'utils/conversion.util'

import { USER_CASE } from 'global/constants/reducer.const'
import { COOKIE_STORAGE } from 'global/constants/storage.const'

// Actions
const ACTION_UPDATE_USER_DATA = (payload) => ({
  type: USER_CASE.UPDATE_USER_DATA,
  ...payload,
})

const ACTION_CLEAR_USER_DATA = () => ({
  type: USER_CASE.CLEAR_USER_DATA,
})

// Functions
export const updateUserData = () => {
  const bearerToken = cookies.get(COOKIE_STORAGE.TOKEN_KEY)
  const jwtToken = bearerToken.split(' ')[1]
  const { id, role } = jwtToData(jwtToken)

  return (dispatch) => dispatch(ACTION_UPDATE_USER_DATA({ id, role }))
}

export const clearUserData = () => {
  cookies.remove(COOKIE_STORAGE.TOKEN_KEY)

  return (dispatch) => dispatch(ACTION_CLEAR_USER_DATA())
}

export const login = (body) => {
  const url = API.login()
  const request = httpClient.post(url, body).then((res) => res.data)

  return async (dispatch) => await responseHandle(dispatch, request)
}
