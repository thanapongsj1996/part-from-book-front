import React from 'react'
import { withRouter } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import {
  IconButton,
  Divider,
  Button,
  Popover,
  Hidden,
  Grid,
  Backdrop,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircleSharp } from '@material-ui/icons'

import { NAV_LIST } from '../constants/header-nav-list.const'
import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  navButtonPopover: {
    width: '100%',
    fontSize: 18,
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  navButtonPopoverProfile: {
    width: '100%',
    fontSize: 15,
    fontWeight: 400,
    paddingRight: 20,
    color: theme.palette.text.primary,
  },
  menuIcon: {
    color: COLOR.primary,
  },
  menuIconDark: {
    color: COLOR.white,
  },
  userIconPopoverProfile: {
    color: '#95A5A6',
    fontSize: 80,
  },
  popoverProfile: {
    padding: 12,
  },
  profileSection: {
    textAlign: 'left',
  },
  userIconPopover: {
    color: '#95A5A6',
    fontSize: 100,
  },
  userNamePopover: {
    textAlign: 'center',
    marginTop: '-14px',
  },
  profileHeader: {
    fontSize: 18,
  },
  textCenter: {
    textAlign: 'center',
  },
  dividerPopover: {
    margin: theme.spacing(1, 0),
  },
  lookProfile: {
    marginTop: -5,
  },
  divider: {
    margin: theme.spacing(0, 0.5, 0, 2),
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  popover: {
    width: '80%',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const HeaderPopmenu = ({ history, profilePopover, setProfilePopover }) => {
  const classes = useStyles()

  const onClosePopMenu = () => setProfilePopover(null)

  const navigateToProfile = () => history.push(`/article/1`)

  return (
    <>
      {/* Desktop view */}
      <Hidden only={['xs']}>
        <Popover
          id="popover-menu"
          open={!!profilePopover}
          anchorEl={profilePopover}
          onClose={onClosePopMenu}
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
                  <div className={classes.profileHeader}>Thanapong Somjai</div>
                  <div className={classes.lookProfile}>ดูโปรไฟล์ของคุณ</div>
                </Grid>
              </Grid>
            </Button>
            <Grid item xs={12} className={classes.dividerPopover}>
              <Divider variant="middle" color="primary" />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Button xs={12} className={classes.navButtonPopover}>
              ออกจากระบบ
            </Button>
          </Grid>
        </Popover>
      </Hidden>

      {/* Mobile view */}
      <Hidden smUp>
        <Backdrop
          className={classes.backdrop}
          open={!!profilePopover}
          onClick={onClosePopMenu}
        >
          <Popover
            id="popover-menu"
            open={!!profilePopover}
            anchorEl={profilePopover}
            onClose={onClosePopMenu}
            classes={{ paper: classes.popover }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Grid container>
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

              {NAV_LIST.map((menu) => (
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
    </>
  )
}

export default withRouter(HeaderPopmenu)
