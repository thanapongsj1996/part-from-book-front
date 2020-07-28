import React from 'react'
import { Container, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArticleList from './components/ArticleList'
import CategoryList from './components/CategoryList'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    margin: theme.spacing(3, 0),
  },
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar />

        <Typography className={classes.title} variant="h4" component="h1">
          เรื่องเล่าทั้งหมด
        </Typography>

        <CategoryList />

        <ArticleList />
      </Container>
    </main>
  )
}
