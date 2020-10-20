import React, { useState } from 'react';
// Icons
import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
// Style
import './style/Chat.css';

function Chat() {
	const [input, setInput] = useState(); // Creates an input state

	const sendMessage = (e) => {
		e.preventDefault(); // Stops from refreshing
		console.log('hiting submit');
		// Firebase
		setInput('');
	};
	return (
		<div className='chat'>
			<div className='chat__header'>
				<h4>
					To:{' '}
					<span className='chat__name'> Channel Name</span>
				</h4>
				<strong>Details</strong>
			</div>
			<div className='chat__messages'>
				<h2>Message</h2>
				<h2>Message</h2>
				<h2>Message</h2>
				<h2>Message</h2>
				<h2>Message</h2>
			</div>
			<div className='chat__input'>
				<form action='submit'>
					<input
						value={input} // sets value to the input
						onChange={(e) => setInput(e.target.value)} // sets input state onChange based on event target value of the aka the text
						type='text'
						placeholder='iMessage Clone'
					/>
					<button onClick={sendMessage}>
						Send Message
					</button>
				</form>
				<IconButton>
					<MicNone className='chat__mic' />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
