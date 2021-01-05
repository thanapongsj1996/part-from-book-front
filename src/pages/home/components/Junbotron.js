import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const bgImage =
  'https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    width: '100%',
    background: `linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3) ), url('${bgImage}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(18, 2, 15, 2),
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
