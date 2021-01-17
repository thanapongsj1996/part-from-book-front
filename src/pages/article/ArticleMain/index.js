import React from 'react'
import {
  Grid,
  Container,
  Toolbar,
  Typography,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArticleList from './components/ArticleList'
import CategoryList from './components/CategoryList'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    margin: theme.spacing(3, 0, 4, 0),
  },
  content: {
    padding: theme.spacing(2, 0),
  },
  divider: {
    marginTop: 15,
    width: 60,
    height: 4,
  },
}))

export default function Content() {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar />

        <Typography className={classes.title} variant="h4" component="h1">
          เรื่องเล่าจากหนังสือ
          <Grid container justify="center">
            <Divider
              className={classes.divider}
              variant="middle"
              color="primary"
            />
          </Grid>
        </Typography>

        <CategoryList />

        <ArticleList />
      </Container>
    </main>
  )
}
