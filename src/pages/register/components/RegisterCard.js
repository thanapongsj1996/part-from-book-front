import React, { useMemo } from 'react'
import {
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from 'global/components/Logo'
import MuiLink from 'global/components/MuiLink'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    padding: `30px 16px 20px`,
    borderRadius: theme.spacing(1),
  },
  rootBackground: {
    background: 'rgba(229, 229, 229, 0.94)',
  },
  rootDarkBackground: {
    background: 'rgba(24, 24, 24, 0.5)',
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  logoWrapper: {
    marginBottom: theme.spacing(3),
  },
  description: {
    width: '70%',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    paddingBottom: theme.spacing(1),
    borderRadius: 3,
    '& > .MuiInputBase-root': {
      border: `1px solid ${COLOR.GREY3}`,
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  inputBackground: {
    '& > .MuiInputBase-root': {
      background: 'rgba(249, 249, 249, 0.8)',
    },
  },
  inputDarkBackground: {
    '& > .MuiInputBase-root': {
      background: 'rgba(56, 56, 56, 0.7)',
    },
  },
  submitBtn: {
    width: 150,
    margin: '24px 0',
    fontSize: '1rem',
  },
  link: {
    fontSize: '0.875rem',
    padding: '0 10px',
  },
}))

const formList = [
  { label: 'อีเมล', key: 'email', type: 'text' },
  { label: 'รหัสผ่าน', key: 'password', type: 'password' },
  { label: 'ยืนยันรหัสผ่าน', key: 'passwordConfirm', type: 'password' },
  { label: 'นามปากกา', key: 'penName', type: 'text' },
  { label: 'ชื่อ', key: 'firstName', type: 'text' },
  { label: 'นามสกุล', key: 'lastName', type: 'text' },
]

const RegisterCard = ({ darkMode, formik }) => {
  const classes = useStyles()

  const cardClasses = useMemo(() => {
    const classList = [classes.root]
    if (darkMode) {
      classList.push(classes.rootDarkBackground)
    } else {
      classList.push(classes.rootBackground)
    }

    return classList.join(' ')
  }, [
    classes.root,
    classes.rootBackground,
    classes.rootDarkBackground,
    darkMode,
  ])

  const inputClasses = useMemo(() => {
    const classList = [classes.input]
    if (darkMode) {
      classList.push(classes.inputDarkBackground)
    } else {
      classList.push(classes.inputBackground)
    }

    return classList.join(' ')
  }, [
    classes.input,
    classes.inputBackground,
    classes.inputDarkBackground,
    darkMode,
  ])

  return (
    <Card className={cardClasses}>
      <CardContent className={classes.cardContent}>
        <Grid
          container
          className={classes.contentWrapper}
          justify="center"
          spacing={2}
        >
          <Grid item className={'prevent-click ' + classes.logoWrapper}>
            <Logo darkMode={darkMode} size={1.625} />
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.description} variant="body1">
              สมัครสมาชิกเพื่ออ่านและแบ่งปันเรื่องราวต่าง ๆ
              ในเรื่องเล่าจากหนังสือ
            </Typography>
          </Grid>

          <form className={classes.form} onSubmit={formik.handleSubmit}>
            {formList.map(({ label, key, type }) => (
              <TextField
                key={key}
                className={inputClasses}
                variant="outlined"
                type={type}
                name={key}
                placeholder={label}
                value={formik.values[key]}
                onChange={formik.handleChange}
                error={formik.touched[key] && Boolean(formik.errors[key])}
                helperText={formik.touched[key] && formik.errors[key]}
              />
            ))}

            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
              type="submit"
            >
              สมัคร
            </Button>
          </form>

          <Grid
            item
            container
            direction="column"
            alignItems="center"
            xs={12}
            spacing={3}
          >
            <Grid item>
              <Typography variant="body2" gutterBottom>
                มีบัญชีผู้ใช้งานแล้ว
                <MuiLink
                  to="/login"
                  underline="always"
                  className={classes.link}
                  color={darkMode ? 'inherit' : 'primary'}
                >
                  เข้าสู่ระบบ
                </MuiLink>
              </Typography>
            </Grid>

            <Grid item>
              <MuiLink to="/" color="inherit" className={classes.link}>
                กลับหน้าแรก
              </MuiLink>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RegisterCard
