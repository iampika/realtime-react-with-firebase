import React from 'react'
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
            <span className="TimeStamp">3:37 PM</span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  )
}

export default FirstMessageFromUser
