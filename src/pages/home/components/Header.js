import React from 'react'
import {
  AppBar,
  Toolbar,
  Link,
  Switch,
  FormControlLabel,
  IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircleSharp } from '@material-ui/icons'

import logo from 'assets/images/small-logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  logoImage: {
    width: 55,
    height: 55,
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
          className={classes.logoLink}
          href="/"
          color="inherit"
          underline="none"
        >
          <img className={classes.logoImage} src={logo} alt="small-logo" />
        </Link>

        <div className={classes.spacer}></div>

        {/* <Switch
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        /> */}
        {/* <span style={{ color: 'black' }}>Dark</span> */}
        {/* <FormControlLabel control={<Switch color="primary" />} label="Dark" />
        <FormControlLabel
          control={<Switch color="primary" />}
          label="Primary"
        /> */}

        <IconButton>
          <AccountCircleSharp fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
