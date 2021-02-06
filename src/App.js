import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import ThemeOverride from './theme'
import Header from './layouts/Header'
// import Footer from './layouts/Footer'
import Routes from './routes'
import ScrollToTop from './global/components/ScrollToTop'

// Constants
import { LOCAL_STORAGE } from './global/constants/storage.const'
import COLOR from './assets/scss/variables/__colors.scss'

// Actions
import { setDarkMode } from './actions/app.action'

// Assets

const App = ({ darkMode, actions, ...props }) => {
  useEffect(() => {
    const darkMode =
      localStorage.getItem(LOCAL_STORAGE.DARK_MODE_KEY) === 'true'
    actions.setDarkMode(darkMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update body background color
  useEffect(() => {
    const backgroundColor = darkMode ? COLOR.DARK1 : COLOR.GREY1
    document.body.style.backgroundColor = backgroundColor
    localStorage.setItem(LOCAL_STORAGE.DARK_MODE_KEY, darkMode)
  }, [darkMode])

  return (
    <Router>
      <ScrollToTop />
      <ThemeOverride darkMode={darkMode}>
        <Header />

        <Routes />

        {/* <Footer /> */}
      </ThemeOverride>
    </Router>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = { setDarkMode }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(App)
