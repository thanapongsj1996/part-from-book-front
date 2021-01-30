import React, { useEffect, useMemo, useCallback } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from 'global/components/Logo'
import HeaderNavbar from './components/HeaderNavbar'

import { setShowHeader } from 'actions/app.action'

import COLOR from 'assets/scss/variables/__colors.scss'

const hideList = ['/login', '/register']

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
const Header = ({ appState, actions, location, ...props }) => {
  const classes = useStyles()

  const handleScroll = useCallback(() => {
    const { scrollY } = window

    if (scrollY < 500 && appState.showHeader) {
      actions.setShowHeader(false)
    } else if (scrollY >= 500 && !appState.showHeader) {
      actions.setShowHeader(true)
    }
  }, [actions, appState.showHeader])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  const appBarClasses = useMemo(() => {
    const classList = [classes.appBar]
    const isHomePage = location.pathname === '/'
    const hideHeader = hideList.includes(location.pathname)

    if (appState.darkMode) {
      classList.push(classes.appBarDark)
    } else {
      classList.push(classes.appBarDefault)
    }

    if (hideHeader || (!appState.showHeader && isHomePage)) {
      classList.push(classes.hide)
    }

    return classList.join(' ')
  }, [
    classes.appBar,
    classes.appBarDark,
    classes.appBarDefault,
    classes.hide,
    location.pathname,
    appState.darkMode,
    appState.showHeader,
  ])

  return (
    <AppBar className={appBarClasses} position="fixed">
      <Container>
        <Toolbar>
          <Logo darkMode={appState.darkMode} hideLabel />

          <div className={classes.spacer} />

          <HeaderNavbar darkMode={appState.darkMode} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const mapStates = ({ appState }) => ({ appState })

const mapActions = { setShowHeader }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(withRouter(Header))
