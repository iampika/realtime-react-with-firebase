import React, { useState } from 'react'

const ChannelInfo = () => {
  const [input, setInput] = useState('Awesome stuff')

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div className="ChannelInfo">
      <div className="Topic">
        Topic:{' '}
        <input
          className="TopicInput"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className="ChannelName">#general</div>
    </div>
  )
}

export default ChannelInfo
