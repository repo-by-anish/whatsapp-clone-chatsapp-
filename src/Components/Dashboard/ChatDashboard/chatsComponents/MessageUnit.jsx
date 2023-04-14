import React from 'react'

export default function MessageUnit(props) {
  const message = props.message;


  return (
    <div className='unit-message'>
      <div style={{"padding":message.sentMessage!==""?"":"0"}} className='message-by-user'>
        <p>{message.sentMessage}</p>
      </div>
      <br /><br /><br />
      <div style={{"padding":message.replyMessage!==""?"":"0"}} className='message-by-target'>
        <p >{message.replyMessage}</p>
      </div>
    </div>
  )
}
