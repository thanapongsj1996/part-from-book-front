import React from 'react'

import Header from 'layouts/Header'
import Content from './Content'

export default function Layout() {
  window.scrollTo(0, 0)

  return (
    <>
      <Header />
      <Content />
    </>
  )
}
