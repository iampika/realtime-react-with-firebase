import React, { useEffect, useState } from 'react'
import db from './db'

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    db.collection('channels')
      .doc('general')
      .collection('messages')
      .onSnapshot(snapshot => {
        const docs = []
        snapshot.forEach(doc => {
          docs.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setMessages(docs)
      })
  }, [])

  return (
    <div className="Messages">
      <div className="EndOfMessages">
        That&#39;s every message!
      </div>
      {messages.map((message, index) => {
        return index === 0 ? (
          <div>
            <div className="Day">
              <div className="DayLine" />
              <div className="DayText">12/6/2018</div>
              <div className="DayLine" />
            </div>
            <div className="Message with-avatar">
              <div className="Avatar" />
              <div className="Author">
                <div>
                  <span className="UserName">
                    Mahendra Choudhary
                  </span>
                  <span className="TimeStamp">3:37 PM</span>
                </div>
                <div className="MessageContent">
                  {message.text}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
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
