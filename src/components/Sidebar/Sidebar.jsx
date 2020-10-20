import React, { useEffect, useState } from 'react';
// Material UI Icons
import { Avatar, IconButton } from '@material-ui/core';
import {
	RateReviewOutlined,
	Search,
} from '@material-ui/icons';
// Components
import SidebarChat from '../SidebarChat/SidebarChat';
// Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
// firebase
import db, { auth } from '../../firebase';

import './style/Sidebar.css';

function Sidebar() {
	const user = useSelector(selectUser);
	// state
	const [chats, setChats] = useState([]);

	useEffect(() => {
		db.collection('chats').onSnapshot((snapshot) =>
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return () => {
			console.log('<<< hitting use effect');
		};
	}, []);

	const addChat = () => {
		const chatName = prompt('Please enter a chat name...');
		if (chatName) {
			db.collection('chats').add({
				chatName: chatName,
			});
		}
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<Avatar
					onClick={() => auth.signOut()}
					src={user.photo}
					className='sidebar__avatar'
				/>
				<div className='sidebar__input'>
					<Search />
					<input type='text' placeholder='search' />
				</div>
				{/* Makes Icons clickable - for material UI */}
				<IconButton
					variant='outlined'
					className='sidebar__inputButton'>
					<RateReviewOutlined onClick={addChat} />
				</IconButton>
			</div>

			<div className='sidebar__chats'>
				{chats.map(({ id, data: { chatName } }) => (
					<SidebarChat
						key={id}
						id={id}
						chatName={chatName}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
