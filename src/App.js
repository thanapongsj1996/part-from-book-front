import React from 'react'
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
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#273746',
      },
      secondary: {
        main: '#A6ACAF',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeLayout />
    </ThemeProvider>
  )
}
