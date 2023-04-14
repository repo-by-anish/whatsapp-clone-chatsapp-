import React from 'react'
import ChatListUnit from './ChatListUnit'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function ChatList(props) {
    const userArray = props.userArray;
    console.log(userArray);
    return (
        <div className='chatlist'>
            <div className="chatlist-navigation">
                <img src="https://edison.academy/as/wp-content/uploads/2022/01/sample-1.png" alt="" />
                <GroupsRoundedIcon />
                <DonutLargeRoundedIcon />
                <ChatRoundedIcon />
                <MoreVertRoundedIcon />
            </div>
            <div className="searchUser">
                <div className="left">
                    <SearchRoundedIcon />
                    <input type="text" placeholder='search or start new chat' />
                </div>
                <FilterListIcon sx={{"padding":"0 0.5rem"}} />
            </div>
            {userArray.map((user, index) => {
                return <ChatListUnit key={index} user={user} setChatingUser={props.setChatingUser} setIschating={props.setIschating} />

            })}
        </div>
    )
}
