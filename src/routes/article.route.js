import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ArticleMain from 'pages/article/ArticleMain'
import ArticleDetail from 'pages/article/ArticleDetail'

export default function ArticleRoutes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <ArticleDetail />
      </Route>
      <Route path={`${path}`}>
        <ArticleMain />
      </Route>
    </Switch>
  )
}
