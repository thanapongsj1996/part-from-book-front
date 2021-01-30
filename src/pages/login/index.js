import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'

import LoginCard from './components/LoginCard'

import background from 'assets/images/login-background.png'

const validationSchema = yup.object({
  username: yup.string('Enter your username').required('Username is required'),
  password: yup.string('Enter your password').required('Password is required'),
})

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
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}))

const Login = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => submit(values),
  })

  const submit = (values) => {
    console.log('Submit username:', values.username)
  }

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <LoginCard formik={formik} />
      </Container>
    </section>
  )
}

export default Login
