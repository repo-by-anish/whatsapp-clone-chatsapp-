import React from 'react'

export default function ChatListUnit(props) {
  const user=props.user;
  return (
    <div onClick={()=>{
      props.setIschating(true);
      props.setChatingUser(user);
    }} className='chatlist-unit'>
      <div className="left">
        <img src={user.image?user.image:"Images/default_avtar.jpg"} alt="" />
      </div>
      <div className="right">
        <p className="name">{user.name} </p>
        <p className='last-message'>The Last message sent by user.</p>
      </div>
      <span className="time">Time/date</span>

    </div>
  )
}
