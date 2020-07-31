import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ArticleMain from './ArticleMain/Layout'
import ArticleDetail from './ArticleDetail/Layout'

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
