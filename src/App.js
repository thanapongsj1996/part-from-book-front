import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

// Components
import Header from './layouts/Header'
import Routes from './routes'

// Constants
import { LOCAL_STORAGE } from './global/constants/storage.const'
import COLOR from './assets/scss/variables/__colors.scss'

// Actions
import { toggleDarkMode, setDarkMode } from './actions/app.action'

// Assets

const App = ({ appState, ...props }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    const darkMode =
      localStorage.getItem(LOCAL_STORAGE.DARK_MODE_KEY) === 'true'
    props.setDarkMode(!!(darkMode || prefersDarkMode))

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

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: appState.darkMode ? 'dark' : 'light',
          primary: {
            main: COLOR.primary,
            light: COLOR.primaryLighter,
            dark: COLOR.primaryDarker,
          },
          secondary: {
            main: '#BDC3C7',
          },
        },
        typography: {
          fontFamily: "'Poppins', 'Prompt', sans-serif !important",
          fontWeightBold: 600,
        },
      }),
    [appState.darkMode]
  )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes />
      </ThemeProvider>
    </Router>
  )
}

const mapStates = ({ appState }) => ({ appState })

const mapActions = { toggleDarkMode, setDarkMode }

export default connect(mapStates, mapActions)(App)
