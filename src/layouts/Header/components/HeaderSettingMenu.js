import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Paper,
  MenuItem,
  MenuList,
  Popper,
  ClickAwayListener,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Brightness7Rounded as SunIcon,
  Brightness2Rounded as MoonIcon,
} from '@material-ui/icons'

import MuiLink from 'global/components/MuiLink'

import { toggleDarkMode } from 'actions/app.action'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: '1.125rem',
    fontWeight: 400,
    margin: theme.spacing(0, 1),
  },
  buttonFont: {
    color: COLOR.black,
  },
  buttonDarkFont: {
    color: COLOR.grey3,
  },
  popper: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: theme.shadows[1],
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
    if (menuPostion) {
      setMenuPostion(null)
    } else {
      setMenuPostion(event.currentTarget)
    }
  }

  const buttonClasses = useMemo(() => {
    const classList = [classes.button]
    if (darkMode) {
      classList.push(classes.buttonDarkFont)
    } else {
      classList.push(classes.buttonFont)
    }

    return classList.join(' ')
  }, [classes.button, classes.buttonDarkFont, classes.buttonFont, darkMode])

  return (
    <>
      <Button className={buttonClasses} onClick={toggleOpenSubMenu}>
        ตั้งค่า
      </Button>

      <Popper
        className={classes.popper}
        open={!!menuPostion}
        anchorEl={menuPostion}
        placement="bottom-end"
        onClose={toggleOpenSubMenu}
      >
        <Paper>
          <ClickAwayListener onClickAway={toggleOpenSubMenu}>
            <MenuList className={classes.menuList}>
              {/* {SUB_MENU_LIST.map((menu) => (
                <MenuItem
                  key={menu.title}
                  className={classes.menu}
                  onClick={toggleOpenSubMenu}
                >
                  {menu.title}
                </MenuItem>
              ))} */}

              <MenuItem
                className={classes.menu}
                onClick={actions.toggleDarkMode}
              >
                <span>เปลี่ยนโหมด</span>
                {darkMode ? (
                  <SunIcon />
                ) : (
                  <MoonIcon className={classes.moonIcon} />
                )}
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
          </ClickAwayListener>
        </Paper>
      </Popper>
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
