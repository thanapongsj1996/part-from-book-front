import React from 'react'
import { Typography, Paper, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LogoWriting from 'assets/images/home/logo-writing.png'
import LogoBook from 'assets/images/home/logo-book.png'
import LogoTarget from 'assets/images/home/logo-target.png'

const logos = [LogoWriting, LogoBook, LogoTarget]

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 3, 6),
    position: 'relative',
    borderRadius: 10,
    minHeight: 160,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
      width: '80%',
    },
  },
  img: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '-40px',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  title: {
    fontWeight: 600,
  },
  divider: {
    margin: `${theme.spacing(2)}px auto`,
    width: '75%',
    height: 1.5,
  },
  detail: {
    lineHeight: 2.5,
  },
}))

const HomeDescriptionCard = ({ description }) => {
  const classes = useStyles()
  const logo = logos.find((logo) => logo.includes(description.logoName))

  return (
    <Paper className={classes.root}>
      <img
        className={classes.img}
        src={logo}
        alt={description.logoName}
        style={{ width: description.logoWidth, height: description.logoHeight }}
      />

      <Typography className={classes.title} variant="h6" component="h3">
        {description.title}
      </Typography>

      <Divider
        className={classes.divider}
        variant="middle"
        style={{ backgroundColor: description.dividerColor }}
      />

      <Typography className={classes.detail} variant="body1">
        {description.detail}
      </Typography>
    </Paper>
  )
}

export default HomeDescriptionCard
