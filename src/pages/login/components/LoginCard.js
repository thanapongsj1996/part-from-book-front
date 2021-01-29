import React from 'react'
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
    maxWidth: 520,
    padding: `40px 16px`,
    background: 'rgba(229, 229, 229, 0.94)',
    borderRadius: theme.spacing(1),
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  contentWrapper: {
    margin: '-8px 0',
  },
  logoWrapper: {
    marginBottom: theme.spacing(3),
  },
  description: {
    width: '70%',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
  },
  inputWrapper: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  input: {
    width: '100%',
    background: 'rgba(249, 249, 249, 0.8)',
    border: `1px solid ${COLOR.grey3}`,
    borderRadius: 3,
  },
  submitBtn: {
    width: 150,
    marginTop: theme.spacing(3),
    fontSize: '1rem',
  },
  link: {
    fontSize: '0.875rem',
    padding: '0 10px',
  },
}))

const LoginCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Grid
          container
          className={classes.contentWrapper}
          justify="center"
          xs={12}
          spacing={2}
        >
          <Grid item className={'prevent-click ' + classes.logoWrapper}>
            <Logo size={1.625} />
          </Grid>

          <Grid item className={classes.descriptionWrapper} xs={12}>
            <Typography className={classes.description} variant="body1">
              เข้าสู่ระบบเพื่ออ่านและแบ่งปันเรื่องราวต่าง ๆ
              ในเรื่องเล่าจากหนังสือ
            </Typography>
          </Grid>

          <Grid item className={classes.inputWrapper}>
            <TextField
              className={classes.input}
              variant="outlined"
              placeholder="อีเมล"
            />
          </Grid>
          <Grid item className={classes.inputWrapper}>
            <TextField
              className={classes.input}
              variant="outlined"
              placeholder="รหัสผ่าน"
            />
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignItems="center"
            xs={12}
            spacing={3}
          >
            <Grid item>
              <Button
                className={classes.submitBtn}
                variant="contained"
                color="primary"
              >
                เข้าสู่ระบบ
              </Button>
            </Grid>

            <Grid item>
              <MuiLink
                to="/forget-password"
                color="inherit"
                underline="always"
                className={classes.link}
              >
                ลืมรหัสผ่าน
              </MuiLink>
            </Grid>

            <Grid item>
              <Typography variant="body2" gutterBottom>
                ยังไม่มีบัญชีผู้ใช้งาน
                <MuiLink
                  to="/register"
                  underline="always"
                  className={classes.link}
                >
                  สมัครสมาชิก
                </MuiLink>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default LoginCard
