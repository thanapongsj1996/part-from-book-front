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
  email: yup.string().required('กรุณาระบุอีเมลของคุณ'),
  password: yup.string().required('กรุณาระบุรหัสผ่านของคุณ'),
})

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
    minHeight: '100vh',
  },
  background: {
    background: `url(${background}) center/cover no-repeat fixed`,
  },
  darkBackground: {
    background: `url(${darkBackground}) center/cover no-repeat fixed`,
  },
  container: {
    padding: '48px 24px 24px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
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
    alert('Submit email:', values.email)
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
