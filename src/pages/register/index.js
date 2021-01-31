import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import deepClone from 'deep-clone'

import RegisterCard from './components/RegisterCard'

import { YUP_VALIDATION } from 'global/constants/yup.const'

import background from 'assets/images/login/login-background.png'
import darkBackground from 'assets/images/login/login-dark-background.png'

const validationSchema = yup.object({
  email: YUP_VALIDATION.EMAIL,
  password: YUP_VALIDATION.PASSWORD,
  passwordConfirm: YUP_VALIDATION.PASSWORD_CONFIRM,
  penName: YUP_VALIDATION.PEN_NAME,
  firstName: YUP_VALIDATION.FIRST_NAME,
  lastName: YUP_VALIDATION.LAST_NAME,
})

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  penName: '',
  firstName: '',
  lastName: '',
}

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

const Register = ({ darkMode, ...props }) => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: deepClone(initialValues),
    validationSchema: validationSchema,
    onSubmit: (values) => submit(values),
  })

  const submit = (values) => {
    const valueFiltered = Object.entries(values).filter(
      ([key]) => !key.includes('password')
    )
    console.log(valueFiltered)
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
        <RegisterCard darkMode={darkMode} formik={formik} />
      </Container>
    </section>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(Register)
