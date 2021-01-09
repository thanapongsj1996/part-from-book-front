import React from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MuiLink from 'global/components/MuiLink'

import blueLogo from 'assets/images/logos/logo-blue.png'
import whiteLogo from 'assets/images/logos/logo-white.png'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
  logo: {
    width: 40,
    height: 30,
  },
}))

const HeaderLogo = ({ darkMode }) => {
  const classes = useStyles()

  return (
    <MuiLink
      to="/"
      color="inherit"
      underline="none"
      className={classes.logoLink}
    >
      <Grid container spacing={2}>
        <Grid item>
          <img
            className={classes.logo}
            src={darkMode ? whiteLogo : blueLogo}
            alt="small-logo"
          />
        </Grid>
        <Hidden xsDown>
          <Grid item>
            <Typography component="h1" variant="h6">
              เรื่องเล่าจากหนังสือ
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </MuiLink>
  )
}

export default HeaderLogo
