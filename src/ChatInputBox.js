import React from 'react'

const ChatInputBox = () => {
  const handleSubmit = event => {
    event.preventDefault()
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
