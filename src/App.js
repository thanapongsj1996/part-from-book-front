import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

import HomeLayout from 'pages/home/components/HomeLayout'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'light' : 'light',
      primary: {
        main: 'rgba(49, 28, 135, 0.95)',
      },
      secondary: {
        main: '#BDC3C7',
      },
    },
  })
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeLayout />
      </ThemeProvider>
    </Router>
  )
}
