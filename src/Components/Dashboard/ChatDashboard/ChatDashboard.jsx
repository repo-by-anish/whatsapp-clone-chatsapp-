import React, { useState } from 'react'
import Header from '../Basic components/Header';
import "./chatsdashboard.css"
import ChatArea from './chatsComponents/ChatArea';
import ChatList from './chatsComponents/ChatList';
import Message from './chatsComponents/Message';

export default function ChatDashboard() {
  const [isChating, setIschating] = useState(false);
  const [userArray, setUserArray] = useState([
    {
      userId: "u0001",
      name: "Aniket Singh",
      image: "https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png",
      chatingStatus: "online",
      message: [
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        },
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        }
      ]
    },
    {
      userId: "u0002",
      name: "manshi",
      image: "https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png",
      chatingStatus: "online",
      message: [
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        },
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        }
      ]
    },
    {
      userId: "u0003",
      name: "Aarohi",
      image: "https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png",
      chatingStatus: "online",
      message: [
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        },
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        }
      ]
    },
    {
      userId: "u0004",
      name: "Durgesh",
      image: "https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png",
      chatingStatus: "online",
      message: [
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        },
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        }
      ]
    },
    {
      userId: "u0005",
      name: "Himanhsu",
      image: "https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png",
      chatingStatus: "last seen 09:18 pm",
      message: [
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        },
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: ""
        },
        {
          sentMessage: "",
          replyMessage: "This is the message sent by user.."
        },
        {
          sentMessage: "This is the message sent by user..",
          replyMessage: "This is the message reply by other user.."
        }
      ]
    },
    {
      userId: "u0006",
      name: "Anandita",
      image: "https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png",
      chatingStatus: "last seen 09:18 pm",
      message: [
        {
          sentMessage: "hii",
          replyMessage: "hii"
        },
        {
          sentMessage: "kya kar rhi ho ?",
          replyMessage: "kux nhi tum?"
        },
        {
          sentMessage: "Hila rha hun.",
          replyMessage: "Chhi tu nalla hi marega aaj ke baad message mat karna"
        },
        {
          sentMessage: "kya babu kya hua",
          replyMessage: "mai tumhara babu nhi . Apni limit me raho"
        }
      ]
    },
  ]);
  const [chatingUser, setChatingUser] = useState(userArray[0])
  const [user, setUser] = useState({
    name: "",
    messageByUser: [],
    messageByTarget: []
  });
  return (
    <div className="chatDashboard">
      <Header />
      <hr />
      <div className="full-whatsapp">
        <ChatList userArray={userArray} setIschating={setIschating} setChatingUser={setChatingUser} />
        {isChating ? <Message chatingUser={chatingUser} userArray={userArray} /> : <ChatArea />}
      </div>
    </div>
  );
}
