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
  forgetWrapper: {
    width: '80%',
    color: COLOR.GREY2,
    '&.dark': {
      color: COLOR.GREY3,
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

const LoginCard = ({ darkMode, formik }) => {
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

  const forgetWrapperClasses = useMemo(() => {
    const classList = [classes.forgetWrapper]

    if (darkMode) {
      classList.push('dark')
    }

    return classList.join(' ')
  }, [classes.forgetWrapper, darkMode])

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
              เข้าสู่ระบบเพื่ออ่านและแบ่งปันเรื่องราวต่าง ๆ
              ในเรื่องเล่าจากหนังสือ
            </Typography>
          </Grid>

          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              className={inputClasses}
              variant="outlined"
              name="email"
              placeholder="อีเมล"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className={inputClasses}
              variant="outlined"
              name="password"
              placeholder="รหัสผ่าน"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Grid container justify="flex-end" className={forgetWrapperClasses}>
              <Grid item>
                <MuiLink
                  to="/forget-password"
                  color="inherit"
                  className={classes.link}
                >
                  ลืมรหัสผ่าน
                </MuiLink>
              </Grid>
            </Grid>

            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
              type="submit"
            >
              เข้าสู่ระบบ
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
                ยังไม่มีบัญชีผู้ใช้งาน
                <MuiLink
                  to="/register"
                  underline="always"
                  className={classes.link}
                  color={darkMode ? 'inherit' : 'primary'}
                >
                  สมัครสมาชิก
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

export default LoginCard
