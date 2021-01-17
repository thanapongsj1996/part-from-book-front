import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'

// Components
import ThemeOverride from './theme'
import Header from './layouts/Header'
import Routes from './routes'

// Constants
import { LOCAL_STORAGE } from './global/constants/storage.const'
import COLOR from './assets/scss/variables/__colors.scss'

// Actions
import { setDarkMode } from './actions/app.action'

// Assets

const App = ({ appState, actions, ...props }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    const darkMode =
      localStorage.getItem(LOCAL_STORAGE.DARK_MODE_KEY) === 'true'
    // actions.setDarkMode(!!(darkMode || prefersDarkMode))

    if (!darkMode) {
      localStorage.setItem(LOCAL_STORAGE.DARK_MODE_KEY, prefersDarkMode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode])

  // Update body background color
  useEffect(() => {
    const backgroundColor = appState.darkMode ? COLOR.dark1 : COLOR.grey1
    document.body.style.backgroundColor = backgroundColor
  }, [appState.darkMode])

  return (
    <Router>
      <ThemeOverride darkMode={appState.darkMode}>
        <Header />

        <Routes />
      </ThemeOverride>
    </Router>
  )
}

const mapStates = ({ appState }) => ({ appState })

const mapActions = { setDarkMode }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(App)
