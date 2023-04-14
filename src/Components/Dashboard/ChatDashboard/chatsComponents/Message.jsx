import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { MoreVertRounded } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import SendIcon from '@mui/icons-material/Send';
import MessageUnit from './MessageUnit';

export default function Message(props) {

    const user = props.chatingUser;
    const message = user.message;
    const [typedMessage, setTypedMessage] = useState("");
    const handleMessegeTyper = (e) => {

        const input = e.target.value;
        setTypedMessage(input);

    }

    const handleSendButton = (e) => {
        e.preventDefault();
        console.log(typedMessage);
        setTypedMessage("");
        message.push({
            sentMessage:typedMessage,
            replyMessage:"Bhk MC$$***"
        })
    }


    return (
        <div className='message-container'>

            <div className="message-navigation">
                <div className="left">
                    <img src={user.image?user.image:"Images/default_avtar.jpg"} alt="" />
                    <div className="details">
                        <p className="name">{user.name}</p>
                        <p className="Last-seen">{user.chatingStatus}</p>
                    </div>
                </div>
                <div className="right">
                    <SearchIcon />
                    <MoreVertRounded />
                </div>
            </div>

            <div className="message-done">
                <div className="message-done-inner">

                    {user.message ? user.message.map((m, index) => {
                        return <MessageUnit message={m} key={index} />
                    }) : ""}
                </div>
            </div>

            <div className="message-typer">

                <SentimentSatisfiedAltSharpIcon sx={{ "width": "3rem", "height": "1.8rem", "marginLeft": "1rem" }} />
                <AttachFileIcon sx={{ "transform": "rotate(45deg)", "width": "3rem", "height": "1.6rem" }} />
                <form onSubmit={handleSendButton} className='message-sender-form' action="">
                    <input onChange={handleMessegeTyper} value={typedMessage} type="text" placeholder='Type a message' />
                    {
                        !typedMessage ? <KeyboardVoiceSharpIcon sx={{ "width": "3rem", "height": "1.8rem" }} /> : <SendIcon onClick={handleSendButton} sx={{ "width": "3rem", "height": "1.8rem" }} />
                    }

                </form>

            </div>



        </div>
    )
}
