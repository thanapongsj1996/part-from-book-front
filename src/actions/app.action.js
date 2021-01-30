import { APP_CASE } from 'global/constants/reducer.const'

// Actions
export const ACTION_TOGGLE_LOADING = () => ({
  type: APP_CASE.TOGGLE_LOADING,
})

const ACTION_TOGGLE_DARK_MODE = () => ({
  type: APP_CASE.TOGGLE_DARK_MODE,
})

const ACTION_SET_DARK_MODE = (payload) => ({
  type: APP_CASE.SET_DARK_MODE,
  payload,
})

const ACTION_SET_SHOW_HEADER = (payload) => ({
  type: APP_CASE.SET_SHOW_HEADER,
  payload,
})

// Functions
export const toggleDarkMode = () => {
  return (dispatch) => dispatch(ACTION_TOGGLE_DARK_MODE())
}

export const setDarkMode = (darkMode) => {
  return (dispatch) => dispatch(ACTION_SET_DARK_MODE(darkMode))
}

export const setShowHeader = (show) => {
  return (dispatch) => dispatch(ACTION_SET_SHOW_HEADER(show))
}
