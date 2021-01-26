import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  noPicAvatar: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
}))

const UserAvatar = ({ photo = '', name }) => {
  const classes = useStyles()
  const noPhoto = photo.includes('nopic.png')

  return noPhoto ? (
    <Avatar className={classes.noPicAvatar}>{name[0].toUpperCase()}</Avatar>
  ) : (
    <Avatar src={photo} />
  )
}

export default UserAvatar
