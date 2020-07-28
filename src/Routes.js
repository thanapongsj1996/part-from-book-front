import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeRoutes from 'pages/home/HomeRoutes'
import ArticleRoutes from 'pages/article/ArticleRoutes'

export default function Routes() {
  return (
    <Switch>
      <Route path="/article">
        <ArticleRoutes />
      </Route>
      <Route path="/">
        <HomeRoutes />
      </Route>
    </Switch>
  )
}
