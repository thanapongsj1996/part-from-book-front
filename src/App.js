import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

import Header from './layouts/Header'
import Routes from './routes'

import COLOR from './assets/scss/variables/__colors.scss'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
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
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes />
      </ThemeProvider>
    </Router>
  )
}
