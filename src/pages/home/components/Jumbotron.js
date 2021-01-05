import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import background from 'assets/images/jumbotron-background.png'

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    width: '100%',
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(18, 0, 15),
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
        <Grid container direction="row" alignItems="center">
          <Grid item md={8}>
            <div className={classes.item}>หนังสือทุกเล่มมีเรื่องราว</div>
            <p className={classes.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sodales non turpis nec sodales. In eget velit vel erat tempus
              viverra ac sit amet massa. In blandit egestas elit. Maecenas diam
              ligula, dapibu
            </p>
          </Grid>
          <Grid item md={4} />
        </Grid>
      </Container>
    </section>
  )
}
