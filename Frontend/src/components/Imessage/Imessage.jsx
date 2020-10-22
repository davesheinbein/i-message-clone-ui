import React from 'react';
// Component
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
// Style
import './style/Imessage.css';

function Imessage() {
	return (
		<div className='imessage'>
			<Sidebar />
			<Chat />
		</div>
	);
}

export default Imessage;
