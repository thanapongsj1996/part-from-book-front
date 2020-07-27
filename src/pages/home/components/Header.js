import React from 'react'
import {
  AppBar,
  Toolbar,
  Link,
  Container,
  Switch,
  FormControlLabel,
  IconButton,
  Badge,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ShoppingCart } from '@material-ui/icons'

import logo from 'assets/images/small-logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
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
      <Container>
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
          <FormControlLabel
            control={<Switch color="secondary" />}
            label="Dark"
          ></FormControlLabel>
          <IconButton color="inherit">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
