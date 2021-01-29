import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import LoginPage from 'pages/login'

export default function ArticleRoutes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`}>
        <LoginPage />
      </Route>
    </Switch>
  )
}
