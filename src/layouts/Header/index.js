import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Container, Switch, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from 'global/components/Logo'
import HeaderNavbar from './components/HeaderNavbar'
import { toggleDarkMode } from 'actions/app.action'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    transition: 'opacity .5s',
    opacity: 1,
  },
  appBarDefault: {
    backgroundColor: COLOR.white,
  },
  appBarDark: {
    backgroundColor: COLOR.dark1,
  },
  hide: {
    opacity: 0,
    pointerEvents: 'none',
  },
  spacer: {
    flexGrow: 1,
  },
}))
const Header = ({ darkMode, actions, location, ...props }) => {
  const [showHeader, setShowHeader] = useState(false)
  const classes = useStyles()

  const handleScroll = useCallback(() => {
    const { scrollY } = window

    if (scrollY < 500 && showHeader) {
      setShowHeader(false)
    } else if (scrollY >= 500 && !showHeader) {
      setShowHeader(true)
    }
  }, [showHeader])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  const appBarClasses = useMemo(() => {
    const classList = [classes.appBar]
    const isHomePage = location.pathname === '/'

    if (darkMode) {
      classList.push(classes.appBarDark)
    } else {
      classList.push(classes.appBarDefault)
    }

    if (!showHeader & isHomePage) {
      classList.push(classes.hide)
    }

    return classList.join(' ')
  }, [
    classes.appBar,
    classes.appBarDark,
    classes.appBarDefault,
    classes.hide,
    darkMode,
    location.pathname,
    showHeader,
  ])

  return (
    <AppBar className={appBarClasses} position="fixed">
      <Container>
        <Toolbar>
          <Logo darkMode={darkMode} HideLabel />

          <div className={classes.spacer} />

          {/* dark mode swith */}
          <Tooltip title="โหมดกลางคืน" arrow>
            <Switch
              checked={darkMode}
              onChange={actions.toggleDarkMode}
              color="secondary"
              inputProps={{ 'aria-label': 'toggle theme' }}
            />
          </Tooltip>

          <HeaderNavbar darkMode={darkMode} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = { toggleDarkMode }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(withRouter(Header))
