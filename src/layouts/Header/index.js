import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Container, Switch, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HeaderLogo from './components/HeaderLogo'
import HeaderNavbar from './components/HeaderNavbar'
import { toggleDarkMode } from 'actions/app.action'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: COLOR.white,
  },
  appBarDark: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: COLOR.dark1,
    border: 0,
  },
  spacer: {
    flexGrow: 1,
  },
}))
const Header = ({ darkMode, actions, ...props }) => {
  const classes = useStyles()

  return (
    <AppBar
      className={darkMode ? classes.appBarDark : classes.appBar}
      position="fixed"
    >
      <Container>
        <Toolbar>
          <HeaderLogo darkMode={darkMode} />

          <div className={classes.spacer} />

          {/* dark mode swith */}
          <Tooltip title="Toggle light/dark theme" arrow>
            <Switch
              checked={darkMode}
              onChange={actions.toggleDarkMode}
              color="secondary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
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

export default connect(mapStates, mapActions, mergeProps)(Header)
