import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeRoutes from './home.route'
import ArticleRoutes from './article.route'
import LoginRoutes from './login.route'
import RegisterRoutes from './register.route'

export default function Routes() {
  return (
    <Switch>
      <Route path="/articles">
        <ArticleRoutes />
      </Route>
      <Route path="/login">
        <LoginRoutes />
      </Route>
      <Route path="/register">
        <RegisterRoutes />
      </Route>
      <Route path="/">
        <HomeRoutes />
      </Route>
    </Switch>
  )
}
