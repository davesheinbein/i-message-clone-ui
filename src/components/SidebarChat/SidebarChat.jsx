import React from 'react';
// Icons
import { Avatar } from '@material-ui/core';
import './style/SidebarChat.css';

function SidebarChat({ id, chatName }) {
	return (
		<div className='sidebarChat'>
			<Avatar />
			<div className='sidebarChat__info'>
				<h3>{chatName}</h3>
				<p>last message...</p>
				<small>timestamp</small>
			</div>
		</div>
	);
}

export default SidebarChat;
