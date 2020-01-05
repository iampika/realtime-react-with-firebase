import React from 'react'
import useCollection from './useCollection'
import FirstMessageFromUser from './FirstMessageFromUser'

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

export default Messages
