import { USER_CASE } from 'global/constants/reducer.const'

const initialState = {
  id: null,
  role: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CASE.UPDATE_USER_DATA:
      return { ...state, ...payload }
    case USER_CASE.CLEAR_USER_DATA:
      return initialState
    default:
      return state
  }
}
