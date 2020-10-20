import React from 'react';
// Image
import iMessageLogo from '../../images/fakeImessageLogo.png';
// Firebase
import { auth, provider } from '../../firebase';
// Material UI Button
import { Button } from '@material-ui/core';
// Styles
import './style/Login.css';

function Login() {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<div className='login__logo'>
				<img src={iMessageLogo} alt='Fake iMessage Logo' />
				<h1>iMessage Mock UI</h1>
			</div>
			<Button onClick={signIn}>Sign In</Button>
		</div>
	);
}

export default Login;
