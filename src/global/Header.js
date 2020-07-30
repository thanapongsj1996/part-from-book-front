import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Divider,
  Button,
  Popover,
  Hidden,
  Grid,
  Backdrop,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircleSharp, Menu } from '@material-ui/icons'

import logo from 'assets/images/small-logo.png'

const menuList = [
  {
    title: 'หน้าหลัก',
    url: '',
  },
  {
    title: 'บทความ',
    url: '',
  },
  {
    title: 'เกี่ยวกับเรา',
    url: '',
  },
]

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    opacity: 0.97,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.75)',
  },
  logoLink: {
    marginRight: theme.spacing(1),
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  userIconPopover: {
    fontSize: 100,
  },
  userNamePopover: {
    textAlign: 'center',
    marginTop: '-14px',
  },
  navButton: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Prompt',
    marginLeft: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  navButtonPopover: {
    width: '100%',
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Prompt',
    color: theme.palette.text.primary,
  },
  spacer: {
    flexGrow: 1,
  },
  divider: {
    margin: theme.spacing(0, 0.5, 0, 2),
    height: 40,
    alignSelf: 'center',
  },
  dividerPopover: {
    margin: theme.spacing(1, 0),
  },
  popover: {
    width: '100%',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  popover2: {
    padding: '12px 28px 12px 12px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  textCenter: {
    textAlign: 'center',
  },
}))

export default function Header() {
  const classes = useStyles()
  const [profilePopover, setProfilePopover] = useState(null)
  const [menuPopover, setMenuPopover] = useState(null)

  const onShowProfilePopover = (event) => {
    setProfilePopover(event.currentTarget)
  }
  const onCloseProfilePopover = () => {
    setProfilePopover(null)
  }

  const onShowMenuPopover = (event) => {
    setMenuPopover(event.currentTarget)
  }

  const onCloseMenuPopover = () => {
    setMenuPopover(null)
  }

  const showMenuPopover = Boolean(menuPopover)
  const showProfilePopover = Boolean(profilePopover)

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img className={classes.logoImage} src={logo} alt="small-logo" />
        </Link>

        <div className={classes.spacer} />

        <Hidden only={['xs']}>
          {menuList.map((menu) => (
            <Button
              className={classes.navButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              {menu.title}
            </Button>
          ))}

          <Divider
            flexItem
            orientation="vertical"
            classes={{ flexItem: classes.divider }}
          />

          <IconButton>
            <AccountCircleSharp
              fontSize="large"
              onClick={onShowProfilePopover}
            />
          </IconButton>
          <Popover
            id="popover-menu"
            open={showProfilePopover}
            anchorEl={profilePopover}
            onClose={onCloseProfilePopover}
            classes={{ paper: classes.popover2 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <AccountCircleSharp className={classes.userIconPopover} />
              </Grid>
              <Grid item>
                Thanapong Somjai
                <br />
                ดูโปรไฟล์ของคุณ
              </Grid>
            </Grid>
          </Popover>
        </Hidden>

        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <IconButton>
            <Menu fontSize="large" onClick={onShowMenuPopover} />
          </IconButton>

          <Backdrop
            className={classes.backdrop}
            open={showMenuPopover}
            onClick={onCloseMenuPopover}
          >
            <Popover
              id="popover-menu"
              open={showMenuPopover}
              anchorEl={menuPopover}
              onClose={onCloseMenuPopover}
              classes={{ paper: classes.popover }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Grid className={classes.typography} container>
                <Grid item xs={12} className={classes.textCenter}>
                  <IconButton>
                    <AccountCircleSharp className={classes.userIconPopover} />
                  </IconButton>
                </Grid>

                <Grid item xs={12} className={classes.userNamePopover}>
                  <Button
                    className={classes.navButtonPopover}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                  >
                    Thanapong Somjai
                  </Button>
                </Grid>

                <Grid item xs={12} className={classes.dividerPopover}>
                  <Divider variant="middle" color="primary" />
                </Grid>

                {menuList.map((menu) => (
                  <Grid item xs={12} className={classes.textCenter}>
                    <Button
                      className={classes.navButtonPopover}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                    >
                      {menu.title}
                    </Button>
                  </Grid>
                ))}

                <Grid item xs={12} className={classes.dividerPopover}>
                  <Divider variant="middle" color="primary" />
                </Grid>

                <Grid item xs={12} className={classes.textCenter}>
                  <Button
                    className={classes.navButtonPopover}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                  >
                    ออกจากระบบ
                  </Button>
                </Grid>
              </Grid>
            </Popover>
          </Backdrop>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
