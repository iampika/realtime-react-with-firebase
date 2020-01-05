import { useState, useEffect } from 'react'
import { firebase } from './firebase'

const useAuth = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        })
      } else {
        setUser(null)
      }
    })
  }, [])
  return user
}

export default useAuth
