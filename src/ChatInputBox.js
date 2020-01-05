import React from 'react'
import { db } from './firebase'

const ChatInputBox = ({ user }) => {
  const handleSubmit = event => {
    event.preventDefault()
    const { value } = event.target.elements[0]

    db.collection('channels/random/messages').add({
      user: db.collection('users').doc(user.uid),
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
