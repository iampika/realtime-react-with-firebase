import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAm2QX22FgsJW1f4z9rpqxgnsBLK8PP82s',
  authDomain: 'realtime-react-with-firebase.firebaseapp.com',
  databaseURL:
    'https://realtime-react-with-firebase.firebaseio.com',
  projectId: 'realtime-react-with-firebase',
  storageBucket: 'realtime-react-with-firebase.appspot.com',
  messagingSenderId: '33739198178',
  appId: '1:33739198178:web:80f570e029439009aa18bb',
  measurementId: 'G-4K38PR0HHQ'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const db = firebase.firestore()

export default db
