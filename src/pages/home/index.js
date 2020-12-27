import React from 'react'

import Jumbotron from './components/Junbotron'
import WebDetail from './components/WebDetail'

export default function Content() {
  return (
    <main>
      <Jumbotron />
      <WebDetail />
      <div style={{ height: 2000 }}></div>
    </main>
  )
}
