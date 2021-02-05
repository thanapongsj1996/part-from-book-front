import React from 'react'
import { Container, Grid, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Logo from 'global/components/Logo'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 250,
    backgroundColor: COLOR.PRIMARY,
    color: COLOR.WHITE,
    marginTop: theme.spacing(8),
  },
  menuWrapper: {
    height: '100%',
    // paddingTop: 30,
    '&> div': {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
      '&> div': {
        padding: theme.spacing(2),
      },
    },
  },
  menu: {
    fontSize: '1.125rem',
    '&> h4': {
      fontWeight: 600,
      margin: '0 0 0.75rem',
    },
    '&> p': {
      margin: 0,
      fontSize: '1rem',
      '&:not(:last-of-type)': {
        margin: '0 0 0.5rem',
      },
    },
  },
}))

const Footer = ({ ...props }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <section className={classes.root}>
      <Container>
        <Grid
          container
          className={classes.menuWrapper}
          justify={isMobile ? 'center' : 'flex-start'}
        >
          <Grid item xs={12} sm={12} md="auto">
            <Grid container justify={isMobile ? 'center' : 'flex-start'}>
              <Logo darkMode />
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              justify={isMobile ? 'center' : 'flex-start'}
              spacing={isMobile ? 3 : 6}
            >
              <Grid item className={classes.menu}>
                <h4>เว็บไซต์</h4>
                <p>หน้าแรก</p>
                <p>บทความ</p>
              </Grid>

              <Grid item className={classes.menu}>
                <h4>นโยบาย</h4>
                <p>นโยบายความเป็นส่วนตัว</p>
                <p>ข้อกำหนดและเงื่อนไข</p>
                <p>นโยบายคุกกี้</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Footer
