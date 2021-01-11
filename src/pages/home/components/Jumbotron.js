import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import JumbotronTimeline from './JumbotronTimeline'

import background from 'assets/images/jumbotron-background.png'

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    width: '100%',
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(11, 0, 8),
    color: 'white',
  },
  item: {
    fontSize: '45px',
  },
  body: {
    fontSize: '20px',
  },
  item2: {
    padding: '30px',
  },
  logoImage: {
    width: 250,
    height: 250,
  },
}))

export default function Jumbotro() {
  const classes = useStyles()

  return (
    <section className={classes.jumbotron}>
      <Container>
        <JumbotronTimeline />
      </Container>
    </section>
  )
}
