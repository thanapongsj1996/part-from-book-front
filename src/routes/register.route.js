import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import RegisterPage from 'pages/register'

export default function ArticleRoutes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`}>
        <RegisterPage />
      </Route>
    </Switch>
  )
}
