import React, { useState } from 'react'
import { connect } from 'react-redux'
import { IconButton, MenuItem, MenuList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import PopperMenu from 'global/components/PopperMenu'

import COLOR from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles((theme) => ({
  moreIcon: {
    position: 'absolute',
    top: '2rem',
    right: '0.2rem',
  },
  menuList: {
    minWidth: 180,
    padding: 0,
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    padding: '12px 24px',
    '&.remove-menu': {
      color: COLOR.RED,
    },
  },
}))

const ArticleDetailMenu = (props) => {
  const classes = useStyles()
  const [menuPostion, setMenuPostion] = useState(null)

  const toggleOpenMenu = (event) => {
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

  return (
    <>
      <IconButton className={classes.moreIcon} onClick={toggleOpenMenu}>
        <MoreVertIcon />
      </IconButton>

      <PopperMenu position={menuPostion} toggleOpenMenu={toggleOpenMenu}>
        <MenuList className={classes.menuList}>
          <MenuItem
            className={classes.menu}
            onClick={() => {
              setMenuPostion(null)
              props.handleClickEdit()
            }}
          >
            <span>แก้ไขบทความ</span>
          </MenuItem>
          <MenuItem
            className={classes.menu + ' remove-menu'}
            onClick={() => {
              setMenuPostion(null)
              props.handleClickRemove()
            }}
          >
            <span>ลบบทความ</span>
          </MenuItem>
        </MenuList>
      </PopperMenu>
    </>
  )
}

const mapStates = () => ({})

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(ArticleDetailMenu)
