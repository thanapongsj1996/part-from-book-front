import React from 'react'
import { Container, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      {/* <Container maxWidth="lg"> */}
      <Toolbar />
      <h1>Home page</h1>
      {/* </Container> */}
    </main>
  )
}
