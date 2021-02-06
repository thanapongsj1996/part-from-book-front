import React, { useMemo } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  avatar: {
    '&.large': {
      width: '5rem',
      height: '5rem',
      fontSize: '1.75rem',
    },
  },
  noPicAvatar: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
}))

const UserAvatar = ({ photo = '', name, size }) => {
  const classes = useStyles()
  const noPhoto = photo.includes('nopic.png')

  const avatarClasses = useMemo(() => {
    const classList = [classes.avatar]

    if (noPhoto) {
      classList.push(classes.noPicAvatar)
    }

    if (size) {
      classList.push(size)
    }

    return classList.join(' ')
  }, [classes.avatar, classes.noPicAvatar, noPhoto, size])

  return noPhoto ? (
    <Avatar className={avatarClasses}>{name[0].toUpperCase()}</Avatar>
  ) : (
    <Avatar className={avatarClasses} src={photo} />
  )
}

export default UserAvatar
