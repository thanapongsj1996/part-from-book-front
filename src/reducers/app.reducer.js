import { APP_CASE } from 'global/constants/reducer.const'

const initialState = {
  loading: false,
  darkMode: false,
  showHeader: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_CASE.TOGGLE_LOADING:
      return { ...state, loading: !state.loading }
    case APP_CASE.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode }
    case APP_CASE.SET_DARK_MODE:
      return { ...state, darkMode: payload }
    case APP_CASE.SET_SHOW_HEADER:
      return { ...state, showHeader: payload }
    default:
      return state
  }
}
