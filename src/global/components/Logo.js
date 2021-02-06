import React, { useCallback } from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MuiLink from 'global/components/MuiLink'

import blueLogo from 'assets/images/logos/logo-blue.png'
import whiteLogo from 'assets/images/logos/logo-white.png'

import COLOR from 'assets/scss/variables/__colors.scss'

const HeaderLogo = ({ darkMode, hideLabel, size = 1.25 }) => {
  const useStyles = useCallback(
    makeStyles((theme) => ({
      root: {
        marginRight: theme.spacing(1),
      },
      logo: {
        width: `${2 * size}rem`,
        height: `${1.5 * size}rem`,
      },
      label: {
        fontWeight: 600,
        color: darkMode ? COLOR.WHITE : COLOR.PRIMARY,
        fontSize: `${size}rem`,
      },
    })),
    [darkMode]
  )
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
        {hideLabel ? (
          <Hidden xsDown>
            <Grid item>
              <Typography className={classes.label} component="h1" variant="h6">
                เรื่องเล่าจากหนังสือ
              </Typography>
            </Grid>
          </Hidden>
        ) : (
          <Grid item>
            <Typography className={classes.label} component="h1" variant="h6">
              เรื่องเล่าจากหนังสือ
            </Typography>
          </Grid>
        )}
      </Grid>
    </MuiLink>
  )
}

export default HeaderLogo
