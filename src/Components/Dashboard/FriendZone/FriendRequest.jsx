import React from 'react'

export default function FriendRequest() {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <img className='profile-image' src="https://media.licdn.com/dms/image/D5603AQF-2ta9jeG9EQ/profile-displayphoto-shrink_400_400/0/1675083544176?e=1681344000&v=beta&t=HW8HkjjpWmOSkvVFxRN4LXIzfgwvZwWF6q5I2gN0YTI" alt="" />
                </div>
                <div className="bottom">
                    <h4 className='Profile-name'>Anish Kumar</h4>
                    <div className="profile-button">
                        <button class="ripple">Confirm</button>
                        <button class="ripple">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
