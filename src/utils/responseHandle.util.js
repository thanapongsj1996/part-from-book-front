import { ACTION_TOGGLE_LOADING } from 'actions/app.action'

export const responseHandle = async (dispatch, request) => {
  dispatch(ACTION_TOGGLE_LOADING())
  try {
    const data = await request

    return data
  } catch (e) {
    if (e) {
      errorHandle(dispatch, e)
    }
  } finally {
    dispatch(ACTION_TOGGLE_LOADING())
  }
}

export const errorHandle = (dispatch, error) => {
  const { statusText, status } = error

  throw new Error(`${status} ${statusText}`)
}
