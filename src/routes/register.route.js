import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import HomePage from 'pages/home'

export default function ArticleRoutes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`}>
        <HomePage />
      </Route>
    </Switch>
  )
}
