import React, { useEffect, useMemo, useCallback } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Container, Divider } from '@material-ui/core'
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
    opacity: 0.97,
    backgroundColor: COLOR.GREY1,
    '&.dark': {
      backgroundColor: COLOR.DARK1,
    },
    '&.transparent': {
      backgroundColor: 'transparent',
      boxShadow: theme.shadows[0],
    },
  },
  hide: {
    opacity: 0,
    pointerEvents: 'none',
  },
  toolbar: {
    position: 'relative',
  },
  divider: {
    position: 'absolute',
    bottom: 4.5,
    left: 0,
    width: '100%',
    height: 2,
    zIndex: -1,
    backgroundColor: COLOR.GREY5,
  },
  spacer: {
    flexGrow: 1,
  },
}))

// static transparent
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
    if (!props.static) {
      document.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (!props.static) {
        document.removeEventListener('scroll', handleScroll)
      }
    }
  })

  const appBarClasses = useMemo(() => {
    const classList = [classes.appBar]
    const isHomePage = location.pathname === '/'
    const hideHeader = hideList.includes(location.pathname)

    if (props.transparent) {
      classList.push('transparent')
    } else if (appState.darkMode) {
      classList.push('dark')
    }

    if (!props.static) {
      if (hideHeader || (!appState.showHeader && isHomePage)) {
        classList.push(classes.hide)
      }
    }

    return classList.join(' ')
  }, [
    classes.appBar,
    classes.hide,
    location.pathname,
    props.transparent,
    props.static,
    appState.showHeader,
    appState.darkMode,
  ])

  return (
    <AppBar
      className={appBarClasses}
      position={props.static ? 'absolute' : 'fixed'}
    >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Logo darkMode={appState.darkMode} hideLabel />

          <div className={classes.spacer} />

          <HeaderNavbar
            darkMode={appState.darkMode}
            transparent={props.transparent}
          />

          {props.transparent && <Divider className={classes.divider} />}
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
