import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import JumbotronTimeline from './JumbotronTimeline'

import background from 'assets/images/home/jumbotron-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(11, 0, 8),
    marginBottom: theme.spacing(6),
    color: 'white',
  },
}))

export default function Jumbotron() {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container>
        <JumbotronTimeline />
      </Container>
    </section>
  )
}
