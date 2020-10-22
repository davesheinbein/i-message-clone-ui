import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUser,
	login,
	logout,
} from '../../features/userSlice';
// Component
import Imessage from '../../components/Imessage/Imessage';
import Login from '../../components/Login/Login';
import './style/App.css';
import { auth } from '../../firebase';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// User Logged in
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				// User Logged Out in
				dispatch(logout());
			}
		});
		return () => {
			console.log('<<< Hitting use Login/Logout effect');
		};
	}, [dispatch]);

	return (
		<div className='app'>
			{user ? <Imessage /> : <Login />}
		</div>
	);
}

export default App;
