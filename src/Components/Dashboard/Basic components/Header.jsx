import React from 'react'
import "../dashboard.css"
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import {useNavigate} from "react-router-dom"
export default function Header() {
    const Navigate=useNavigate();
    const homeRedirect =()=>{
        Navigate("/userid")
    }
    const friendListRedirect=()=>{
        Navigate("/userid/friends")
    }
    const chatRedirect=()=>{
        Navigate("/userid/chat")
    }
    return (
        <div className='header header-display'>
                <div onClick={homeRedirect} className="left header-display">
                    <HomeIcon />
                </div>
                <div onClick={friendListRedirect} className="right header-display">
                    <GroupIcon />
                </div>
                <div onClick={chatRedirect} className="right header-display">
                    <QuestionAnswerRoundedIcon />
                </div>
        </div>
    )
}
