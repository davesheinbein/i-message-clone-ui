import React, { useEffect, useState } from 'react';
// Icons
import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
// Components
import Message from '../Message/Message';
// redux
import { useSelector } from 'react-redux';
import {
	selectChatId,
	selectChatName,
} from '../../features/chatSlice';
import { selectUser } from '../../features/userSlice';
// firebase
import db from '../../firebase';
import firebase from 'firebase';
// flip move
import FlipMove from 'react-flip-move';
// Style
import './style/Chat.css';

function Chat() {
	const [input, setInput] = useState(''); // Creates an input state
	const [messages, setMessages] = useState([]); // Creates an message state

	const user = useSelector(selectUser); // Gets the user from redux
	const chatName = useSelector(selectChatName); // Gets the chat name from redux
	const chatId = useSelector(selectChatId); // Gets the chat id from redux

	useEffect(() => {
		// grabbing the messages from the db and storing them in the messages array
		if (chatId) {
			db.collection('chats')
				.doc(chatId)
				.collection('messages')
				.orderBy('timestamp', 'desc')
				.onSnapshot((snapshot) =>
					setMessages(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		}
		return () => {
			console.log('<<< hitting set chat use effect');
		};
	}, [chatId]);

	const sendMessage = (e) => {
		e.preventDefault();

		db.collection('chats')
			.doc(chatId)
			.collection('messages')
			.add({
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				message: input,
				uid: user.uid,
				photo: user.photo,
				email: user.email,
				displayName: user.displayName,
			});

		setInput('');
	};

	return (
		<div className='chat'>
			<div className='chat__header'>
				<h4>
					To: <span className='chat__name'>{chatName}</span>
				</h4>
				<strong>Details</strong>
			</div>
			<div className='chat__messages'>
				<FlipMove>
					{messages.map(({ id, data }) => (
						<Message key={id} id={id} contents={data} />
					))}
				</FlipMove>
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
