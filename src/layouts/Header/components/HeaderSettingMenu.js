import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { Button, MenuItem, MenuList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Brightness7Rounded as SunIcon,
  Brightness2Rounded as MoonIcon,
} from '@material-ui/icons'

import MuiLink from 'global/components/MuiLink'
import PopperMenu from 'global/components/PopperMenu'

import { toggleDarkMode } from 'actions/app.action'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: '1.125rem',
    fontWeight: 400,
    margin: theme.spacing(0, 1),
    '&.full-height': {
      minHeight: theme.mixins.toolbar.minHeight,
    },
  },
  buttonFont: {
    color: COLOR.BLACK,
  },
  buttonDarkFont: {
    color: COLOR.GREY3,
  },
  menuList: {
    minWidth: 220,
    padding: 0,
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    padding: '12px 24px',
  },
  moonIcon: {
    transform: 'scaleX(-1) rotate(45deg)',
  },
}))

const HeaderPopmenu = ({ darkMode, showHeader, actions, ...props }) => {
  const classes = useStyles()
  const [menuPostion, setMenuPostion] = useState(null)

  useEffect(() => {
    setMenuPostion(null)
  }, [showHeader])

  const toggleOpenSubMenu = (event) => {
    event.stopPropagation()
    const isClick = event?.type === 'click'

    if (!isClick) {
      return
    }

    if (menuPostion) {
      setMenuPostion(null)
    } else {
      setMenuPostion(event.currentTarget)
    }
  }

  const buttonClasses = useMemo(() => {
    const classList = [classes.button]
    if (darkMode && !props.transparent) {
      classList.push(classes.buttonDarkFont)
    } else {
      classList.push(classes.buttonFont)
    }

    if (props.transparent) {
      classList.push('full-height')
    }

    return classList.join(' ')
  }, [
    classes.button,
    classes.buttonDarkFont,
    classes.buttonFont,
    darkMode,
    props.transparent,
  ])

  return (
    <>
      <Button className={buttonClasses} onClick={toggleOpenSubMenu}>
        ตั้งค่า
      </Button>

      <PopperMenu position={menuPostion} toggleOpenMenu={toggleOpenSubMenu}>
        <MenuList className={classes.menuList}>
          <MenuItem className={classes.menu} onClick={actions.toggleDarkMode}>
            <span>เปลี่ยนโหมด</span>
            {darkMode ? <SunIcon /> : <MoonIcon className={classes.moonIcon} />}
          </MenuItem>

          <MuiLink
            to="/login"
            color="inherit"
            underline="none"
            onClick={toggleOpenSubMenu}
          >
            <MenuItem className={classes.menu}>เข้าสู่ระบบ</MenuItem>
          </MuiLink>
        </MenuList>
      </PopperMenu>
    </>
  )
}

const mapStates = ({ appState }) => ({
  darkMode: appState.darkMode,
  showHeader: appState.showHeader,
})

const mapActions = { toggleDarkMode }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(HeaderPopmenu)
