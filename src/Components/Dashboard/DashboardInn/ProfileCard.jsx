import React from 'react'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ProfileCard() {
    return (
        <div className="card">
            <div className="top">
                <img className='profile-image' src="https://media.licdn.com/dms/image/D5603AQF-2ta9jeG9EQ/profile-displayphoto-shrink_400_400/0/1675083544176?e=1681344000&v=beta&t=HW8HkjjpWmOSkvVFxRN4LXIzfgwvZwWF6q5I2gN0YTI" alt="" />
            </div>
            <div className="bottom">
                <h4 className='Profile-name'>Anish Kumar</h4>
                <div className="profile-button">
                    <button class="ripple"><PersonAddAlt1Icon/></button>
                    <button class="ripple"><HighlightOffRoundedIcon/></button>
                </div>
            </div>
        </div>
    )
}
