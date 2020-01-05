import React, { useState, useEffect } from 'react'
import useCollection from './useCollection'
import { db } from './firebase'

const Messages = ({ channelId }) => {
  const messages = useCollection(
    `channels/${channelId}/messages`,
    'createdAt'
  )

  return (
    <div className="Messages">
      <div className="EndOfMessages">
        That&#39;s every message!
      </div>
      {messages.map((message, index) => {
        const previous = messages[index - 1]
        const showDay = false
        const showAvatar =
          !previous || previous.user.id !== message.user.id
        return showAvatar ? (
          <FirstMessageFromUser
            key={message.id}
            message={message}
            showDay={showDay}
          />
        ) : (
          <div key={message.id}>
            <div className="Message no-avatar">
              <div className="MessageContent">
                {message.text}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const useDoc = path => {
  const [doc, setDoc] = useState([])

  useEffect(() => {
    db.doc(path).onSnapshot(doc => {
      setDoc({
        ...doc.data(),
        id: doc.id
      })
    })
  }, [])

  return doc
}

const FirstMessageFromUser = ({ message, showDay }) => {
  const author = useDoc(message.user.path)

  return (
    <div>
      {showDay && (
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">12/6/2018</div>
          <div className="DayLine" />
        </div>
      )}
      <div className="Message with-avatar">
        <div
          className="Avatar"
          style={{
            backgroundImage: author
              ? `url("${author.photoURL}")`
              : ''
          }}
        />
        <div className="Author">
          <div>
            <span className="UserName">
              {author && author.displayName}
            </span>{' '}
            <span className="TimeStamp">3:37 PM</span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  )
}

export default Messages
