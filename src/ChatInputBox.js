import React from 'react'
import db from './db'

const ChatInputBox = () => {
  const handleSubmit = event => {
    event.preventDefault()
    const { value } = event.target.elements[0]

    // db.collection('channels/general/messages')

    db.collection('channels')
      .doc('random')
      .collection('messages')
      .add({
        text: value,
        createdAt: new Date()
      })

    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="ChatInputBox">
      <input
        className="ChatInput"
        placeholder="Message #general"
      />
    </form>
  )
}

export default ChatInputBox