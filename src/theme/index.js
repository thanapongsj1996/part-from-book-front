import React, { useMemo } from 'react'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'

import COLOR from 'assets/scss/variables/__colors.scss'

const ThemeOverride = ({ darkMode, children }) => {
  const getTitleTextColor = useMemo(
    () => (darkMode ? COLOR.WHITE : COLOR.PRIMARY),
    [darkMode]
  )

  const getSubTitleTextColor = useMemo(
    () => (darkMode ? COLOR.WHITE : COLOR.BLACK),
    [darkMode]
  )

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: COLOR.PRIMARY,
            light: COLOR.PRIMARY_LIGHTER,
            dark: COLOR.PRIMARY_DARKER,
          },
          secondary: {
            main: '#BDC3C7',
          },
          background: {
            paper: darkMode ? COLOR.DARK2 : COLOR.WHITE,
          },
        },
        typography: {
          fontFamily: "'NotoSans', 'Poppins', 'Prompt', sans-serif !important",
          fontWeightBold: 600,
          h1: {
            color: getTitleTextColor,
          },
          h2: {
            color: getTitleTextColor,
          },
          h3: {
            color: getTitleTextColor,
          },
          h4: {
            color: getTitleTextColor,
          },
          h5: {
            color: getTitleTextColor,
          },
          h6: {
            color: getTitleTextColor,
          },
          subtitle1: {
            lineHeight: 2.5,
            color: getSubTitleTextColor,
          },
        },
        overrides: {
          MuiTimeline: {
            root: {
              fontSize: '1.25rem',
              fontWeight: 400,
              color: COLOR.GREY1,
            },
          },
          MuiTimelineContent: {
            root: {
              paddingTop: 0,
            },
          },
          MuiTimelineDot: {
            defaultGrey: {
              backgroundColor: COLOR.GREY1,
            },
          },
          MuiTimelineConnector: {
            root: {
              backgroundColor: COLOR.GREY1,
            },
          },
        },
        props: {
          MuiSkeleton: {
            animation: 'wave',
          },
        },
      }),
    [darkMode, getSubTitleTextColor, getTitleTextColor]
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeOverride
