import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ArticleLayout from './ArticleLayout'

export default function ArticleRoutes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`}>
        <ArticleLayout />
      </Route>
    </Switch>
  )
}
