import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import HomeLayout from './HomeLayout'

export default function ArticleRoutes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}`}>
        <HomeLayout />
      </Route>
    </Switch>
  )
}
