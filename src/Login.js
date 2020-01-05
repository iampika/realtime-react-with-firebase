import React, { useState, Fragment } from 'react'
import { firebase } from './firebase'

function Login() {
  const [authError, setAuthError] = useState(null)

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      setAuthError(error)
    }
  }

  return (
    <div className="Login">
      <h1>Chat!</h1>
      <button onClick={handleSignIn} type="button">
        Sign in with google
      </button>
      {authError && (
        <Fragment>
          <p>Sorry, there was a problem.</p>
          <p>
            <i>{authError.message}</i>
          </p>
          <p>Please try again</p>
        </Fragment>
      )}
    </div>
  )
}

export default Login
