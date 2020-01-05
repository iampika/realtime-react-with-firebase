import React from 'react'
import { Router, Redirect } from '@reach/router'
import Nav from './Nav'
import Channel from './Channel'
import useAuth from './useAuth'
import Login from './Login'

function App() {
  const user = useAuth()

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Router>
        <Channel path="channel/:channelId" user={user} />
        <Redirect from="/" to="channel/general" noThrow />
      </Router>
    </div>
  ) : (
    <Login />
  )
}

export default App
