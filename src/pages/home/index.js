import React from 'react'

import Jumbotron from './components/Jumbotron'
import WebDetail from './components/WebDetail'

const Home = () => {
  return (
    <main>
      <Jumbotron />
      <WebDetail />
      <div style={{ height: 500 }}></div>
    </main>
  )
}

export default Home
