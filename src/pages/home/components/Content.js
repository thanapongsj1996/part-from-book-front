import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArticleList from './ArticleList'
import ArticleDatail from '../../article/ArticleDetail'

const useStyles = makeStyles((theme) => ({
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
        <Switch>
          <Route path="/article">
            <ArticleDatail />
          </Route>
          <Route path="/">
            <ArticleList />
          </Route>
        </Switch>
      </Container>
    </main>
  )
}
