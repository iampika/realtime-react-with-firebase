import { useEffect, useState } from 'react'
import db from './db'

export default (path, orderBy) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    let collection = db.collection(path)

    if (orderBy) {
      collection = collection.orderBy(orderBy)
    }

    return collection.onSnapshot(snapshot => {
      const data = []
      snapshot.forEach(doc => {
        data.push({
          ...doc.data(),
          id: doc.id
        })
      })
      setDocs(data)
    })
  }, [])
  return docs
}
