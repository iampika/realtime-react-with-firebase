import { useState, useEffect } from 'react'
import { firebase, db } from './firebase'

const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const user = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL
        }
        setUser(user)
        db.collection('users')
          .doc(user.uid)
          .set(user, { merge: true })
      } else {
        setUser(null)
      }
    })
  }, [])

  return user
}

export default useAuth
