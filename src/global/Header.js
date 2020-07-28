import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Link,
  Switch,
  FormControlLabel,
  IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircleSharp, Settings } from '@material-ui/icons'

import logo from 'assets/images/small-logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    opacity: 0.97,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.75)',
  },
  logoLink: {
    marginRight: theme.spacing(1),
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  spacer: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img className={classes.logoImage} src={logo} alt="small-logo" />
        </Link>

        <div className={classes.spacer}></div>

        {/* <Switch
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <span style={{ color: 'black' }}>Dark</span> */}

        {/* <FormControlLabel control={<Switch color="secondary" />} label="Dark" /> */}

        <IconButton>
          <AccountCircleSharp fontSize="large" />
        </IconButton>

        {/* <IconButton>
          <Settings fontSize="large" />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}
