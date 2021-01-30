import React, { useCallback, useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import { Menu } from '@material-ui/icons'

import HeaderSettingMenu from './HeaderSettingMenu'
import { NAV_LIST } from '../constants/header-menu.const'
import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  navButton: {
    fontSize: '1.125rem',
    fontWeight: 400,
    margin: theme.spacing(0, 1),
  },
  nav: {
    color: COLOR.black,
  },
  navDark: {
    color: COLOR.grey3,
  },
  navActive: {
    color: COLOR.primary,
    fontWeight: 600,
  },
  navDarkActive: {
    color: COLOR.white,
    fontWeight: 600,
  },
  authLabel: {
    textTransform: 'none',
  },
  icon: {
    color: COLOR.primary,
  },
  iconDark: {
    color: COLOR.white,
  },
}))

const HeaderNavbar = ({ darkMode, location }) => {
  const classes = useStyles()

  const getNavClass = useCallback(
    (url) => {
      const classList = [classes.navButton]

      if (darkMode) {
        classList.push(classes.navDark)
        if (location.pathname === url) {
          classList.push(classes.navDarkActive)
        }
      } else {
        classList.push(classes.nav)
        if (location.pathname === url) {
          classList.push(classes.navActive)
        }
      }

      return classList.join(' ')
    },
    [
      classes.nav,
      classes.navActive,
      classes.navButton,
      classes.navDark,
      classes.navDarkActive,
      darkMode,
      location.pathname,
    ]
  )

  const availableNavs = useMemo(
    () => NAV_LIST.filter(({ requiredLogin }) => !requiredLogin),
    []
  )

  return (
    <>
      {/* <Hidden only={['xs']}> */}
      {availableNavs.map((menu) => (
        <Button
          key={menu.title}
          component={RouterLink}
          to={menu.url}
          className={getNavClass(menu.url)}
        >
          {menu.title}
        </Button>
      ))}

      <HeaderSettingMenu />

      {/* <Button
              classes={{ root: classes.authLabel }}
              className={classes.navButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              เข้าสู่ระบบ
            </Button> */}
      {/* </Hidden> */}

      {/* <IconButton onClick={onShowPopMenu}>
        <Menu
          className={darkMode ? classes.iconDark : classes.icon}
          fontSize="large"
        />
      </IconButton>

      <HeaderPopMenu
        profilePopover={profilePopover}
        setProfilePopover={setProfilePopover}
      /> */}
    </>
  )
}

export default withRouter(HeaderNavbar)
