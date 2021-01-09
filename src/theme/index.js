import React, { useMemo } from 'react'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

import COLOR from 'assets/scss/variables/__colors.scss'

const ThemeOverride = ({ darkMode, children }) => {
  const getHeaderTextColor = useMemo(
    () => (darkMode ? COLOR.white : COLOR.primary),
    [darkMode]
  )

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
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
          h1: {
            color: getHeaderTextColor,
          },
          h2: {
            color: getHeaderTextColor,
          },
          h3: {
            color: getHeaderTextColor,
          },
          h4: {
            color: getHeaderTextColor,
          },
          h5: {
            color: getHeaderTextColor,
          },
          h6: {
            color: getHeaderTextColor,
          },
        },
      }),
    [darkMode, getHeaderTextColor]
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeOverride
