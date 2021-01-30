import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'

import LoginCard from './components/LoginCard'

import background from 'assets/images/login/login-background.png'
import darkBackground from 'assets/images/login/login-dark-background.png'

const validationSchema = yup.object({
  email: yup.string('กรุณาระบุอีเมลของคุณ').required('กรุณาระบุอีเมลของคุณ'),
  password: yup
    .string('กรุณาระบุรหัสผ่านของคุณ')
    .required('กรุณาระบุรหัสผ่านของคุณ'),
})

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
  },
  background: {
    background: `url(${background}) center/cover no-repeat`,
  },
  darkBackground: {
    background: `url(${darkBackground}) center/cover no-repeat`,
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

const Login = ({ darkMode, ...props }) => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => submit(values),
  })

  const submit = (values) => {
    console.log('Submit email:', values.email)
  }

  const rootClasses = useMemo(() => {
    const classList = [classes.root]
    if (darkMode) {
      classList.push(classes.darkBackground)
    } else {
      classList.push(classes.background)
    }

    return classList.join(' ')
  }, [classes.background, classes.darkBackground, classes.root, darkMode])

  return (
    <section className={rootClasses}>
      <Container className={classes.container}>
        <LoginCard darkMode={darkMode} formik={formik} />
      </Container>
    </section>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(Login)
