import React, { useCallback, useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HeaderSettingMenu from './HeaderSettingMenu'
import { NAV_LIST } from '../constants/header-menu.const'
import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  navButton: {
    fontSize: '1.125rem',
    fontWeight: 400,
    margin: theme.spacing(0, 1),
    '&.full-height': {
      height: theme.mixins.toolbar.minHeight,
      borderRadius: 0,
      '&.active': {
        borderBottom: '3px solid',
      },
    },
  },
  nav: {
    color: COLOR.BLACK,
    '&.active': {
      color: COLOR.PRIMARY,
      fontWeight: 600,
    },
  },
  navDark: {
    color: COLOR.GREY3,
    '&.active': {
      color: COLOR.WHITE,
      fontWeight: 600,
    },
  },
  authLabel: {
    textTransform: 'none',
  },
  icon: {
    color: COLOR.PRIMARY,
  },
  iconDark: {
    color: COLOR.WHITE,
  },
}))

const HeaderNavbar = ({ darkMode, transparent, location }) => {
  const classes = useStyles()

  const getNavClass = useCallback(
    (url) => {
      const classList = [classes.navButton]
      let isActive

      if (url === '/') {
        isActive = location.pathname === url
      } else {
        isActive = location.pathname.includes(url)
      }

      if (darkMode && !transparent) {
        classList.push(classes.navDark)
      } else {
        classList.push(classes.nav)
        if (transparent) {
          classList.push('full-height')
        }
      }

      if (isActive) {
        classList.push('active')
      }

      return classList.join(' ')
    },
    [
      classes.nav,
      classes.navButton,
      classes.navDark,
      darkMode,
      location.pathname,
      transparent,
    ]
  )

  const availableNavs = useMemo(
    () => NAV_LIST.filter(({ requiredLogin }) => !requiredLogin),
    []
  )

  return (
    <>
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

      <HeaderSettingMenu transparent={transparent} />
    </>
  )
}

export default withRouter(HeaderNavbar)
