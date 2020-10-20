import React from 'react';
// Material UI Icons
import { Avatar, IconButton } from '@material-ui/core';
import {
	RateReviewOutlined,
	Search,
} from '@material-ui/icons';
// Components
import SidebarChat from '../SidebarChat/SidebarChat';

import './style/Sidebar.css';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<Avatar className='sidebar__avatar' />
				<div className='sidebar__input'>
					<Search />
					<input type='text' placeholder='search' />
				</div>
				{/* Makes Icons clickable - for material UI */}
				<IconButton
					variant='outlined'
					className='sidebar__inputButton'>
					<RateReviewOutlined />
				</IconButton>
			</div>

			<div className='sidebar__chats'>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
