import React from 'react'
import { Popper, Paper, ClickAwayListener } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: theme.shadows[1],
  },
}))

const PopperMenu = ({ position, toggleOpenMenu, ...props }) => {
  const classes = useStyles()

  return (
    <Popper
      className={classes.popper}
      open={!!position}
      anchorEl={position}
      placement="bottom-end"
      onClose={toggleOpenMenu}
    >
      <Paper>
        <ClickAwayListener onClickAway={toggleOpenMenu}>
          {props.children}
        </ClickAwayListener>
      </Paper>
    </Popper>
  )
}

export default PopperMenu
