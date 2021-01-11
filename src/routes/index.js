import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeRoutes from './home.route'
import ArticleRoutes from './article.route'

export default function Routes() {
  return (
    <Switch>
      <Route path="/articles">
        <ArticleRoutes />
      </Route>
      <Route path="/">
        <HomeRoutes />
      </Route>
    </Switch>
  )
}
