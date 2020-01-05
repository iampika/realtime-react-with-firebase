import React from 'react'
import { format } from 'date-fns'
import useDoc from './useDoc'

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
            <span className="TimeStamp">
              {format(
                message.createdAt.seconds * 1000,
                'h:mm:a'
              )}
            </span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  )
}

export default FirstMessageFromUser
