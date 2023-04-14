import React from 'react'
import LockIcon from '@mui/icons-material/Lock';

export default function ChatArea() {
  return (
    <div className='chatarea'>

      <div className="dialogue">
        <img className='whatsapp-logo' src="Images/whatsapp web logo.png" alt="" />
        <p style={{ "fontSize": "2rem", "fontWeight": "lighter", "margin": "0" }}>Whatsapp Web</p>
        <blockquote style={{ "fontSize": "0.9rem", "margin": "0" }}>
          Send and receive messages without keeping your phone online. Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </blockquote>
      </div>
      {/* <p style={{ "fontSize": "0.9rem", "margin":"0", "width":"40%", }} className="chat-area-text">Send and receive messages without keeping your phone online. Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p> */}

      <div className='chat-area-footer'>
        <p ><LockIcon sx={{ "width": "0.8rem" }} /> End-to-End encrypted.</p>
      </div>
    </div>
  )
}
