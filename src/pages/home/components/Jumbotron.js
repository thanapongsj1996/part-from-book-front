import React from 'react'
// import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from 'layouts/Header'
// import JumbotronTimeline from './JumbotronTimeline'

import background from 'assets/images/home/jumbotron-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    minHeight: 550,
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(11, 0, 8),
    marginBottom: theme.spacing(6),
    color: 'white',
  },
  timeline: {
    zIndex: 2,
    position: 'relative',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: 'rgb(0, 0, 0, 40%)',
  },
}))

export default function Jumbotron() {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Header static transparent />
      {/* <Container className={classes.timeline}>
        <JumbotronTimeline />
      </Container> */}
      {/* <div className={classes.overlay}></div> */}
    </section>
  )
}
