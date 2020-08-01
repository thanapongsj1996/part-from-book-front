import React, { useState } from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
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
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircleSharp, Menu } from '@material-ui/icons'

import logo from 'assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: '#0e4e9c',
    boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.75)',
  },
  logoLink: {
    marginRight: theme.spacing(1),
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  whiteIcon: {
    color: 'white',
  },
  userIconPopover: {
    color: '#95A5A6',
    fontSize: 100,
  },
  userIconPopoverProfile: {
    color: '#95A5A6',
    fontSize: 80,
  },
  profileSection: {
    textAlign: 'left',
  },
  profileHeader: {
    fontSize: 18,
  },
  lookProfile: {
    marginTop: -5,
  },
  userNamePopover: {
    textAlign: 'center',
    marginTop: '-14px',
  },
  navButton: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Prompt',
    margin: theme.spacing(0, 1),
    color: 'white',
  },
  navButtonPopover: {
    width: '100%',
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Prompt',
    color: theme.palette.text.primary,
  },
  navButtonPopoverProfile: {
    width: '100%',
    fontSize: 15,
    fontWeight: 400,
    fontFamily: 'Prompt',
    paddingRight: 20,
    color: theme.palette.text.primary,
  },
  spacer: {
    flexGrow: 1,
  },
  divider: {
    margin: theme.spacing(0, 0.5, 0, 2),
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  dividerPopover: {
    margin: theme.spacing(1, 0),
  },
  popover: {
    width: '100%',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  popoverProfile: {
    padding: 12,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  textCenter: {
    textAlign: 'center',
  },
  authLabel: {
    textTransform: 'none',
  },
}))

const menuList = [
  {
    title: 'หน้าหลัก',
    url: '/',
  },
  {
    title: 'บทความ',
    url: '/article',
  },
  {
    title: 'เกี่ยวกับเรา',
    url: '',
  },
]

export default function Header() {
  const classes = useStyles()
  const history = useHistory()

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

  const navigateToProfile = () => history.push(`/article/1`)

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Container>
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
                key={menu.title}
                component={RouterLink}
                to={menu.url}
                className={classes.navButton}
                aria-controls="simple-menu"
                aria-haspopup="true"
              >
                {menu.title}
              </Button>
            ))}

            {/* <Button
              classes={{ root: classes.authLabel }}
              className={classes.navButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              เข้าสู่ระบบ
            </Button> */}

            <IconButton onClick={onShowProfilePopover}>
              <AccountCircleSharp
                fontSize="large"
                classes={{
                  root: classes.whiteIcon,
                }}
              />
            </IconButton>

            <Popover
              id="popover-menu"
              open={showProfilePopover}
              anchorEl={profilePopover}
              onClose={onCloseProfilePopover}
              classes={{ paper: classes.popoverProfile }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Grid container>
                <Button
                  item
                  xs={12}
                  className={classes.navButtonPopoverProfile}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                >
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <AccountCircleSharp
                        className={classes.userIconPopoverProfile}
                      />
                    </Grid>

                    <Grid item className={classes.profileSection}>
                      <div className={classes.profileHeader}>
                        Thanapong Somjai
                      </div>
                      <div className={classes.lookProfile}>ดูโปรไฟล์ของคุณ</div>
                    </Grid>
                  </Grid>
                </Button>
                <Grid item xs={12} className={classes.dividerPopover}>
                  <Divider variant="middle" color="primary" />
                </Grid>
              </Grid>

              <Grid container justify="center">
                <Button item xs={12} className={classes.navButtonPopover}>
                  ออกจากระบบ
                </Button>
              </Grid>
            </Popover>
          </Hidden>

          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <IconButton onClick={onShowMenuPopover}>
              <Menu fontSize="large" className={classes.whiteIcon} />
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
                    <IconButton onClick={navigateToProfile}>
                      <AccountCircleSharp className={classes.userIconPopover} />
                    </IconButton>
                  </Grid>

                  <Grid item xs={12} className={classes.userNamePopover}>
                    <Button
                      className={classes.navButtonPopover}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={navigateToProfile}
                    >
                      Thanapong Somjai
                    </Button>
                  </Grid>

                  <Grid item xs={12} className={classes.dividerPopover}>
                    <Divider variant="middle" color="primary" />
                  </Grid>

                  {menuList.map((menu) => (
                    <Grid
                      item
                      xs={12}
                      key={menu.title}
                      className={classes.textCenter}
                    >
                      <Button
                        className={classes.navButtonPopover}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        component={RouterLink}
                        to={menu.url}
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
      </Container>
    </AppBar>
  )
}
