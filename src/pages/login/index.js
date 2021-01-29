import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LoginCard from './components/LoginCard'

import background from 'assets/images/login-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    paddingTop: theme.spacing(6),
  },
}))

const Login = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <LoginCard />
      </Container>
    </section>
  )
}

export default Login
