import { combineReducers } from 'redux'

import appState from './app.reducer'
import userState from './user.reducer'

const reducers = {
  appState,
  userState,
}

export default combineReducers(reducers)
