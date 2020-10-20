import React, { Component } from 'react';
// Component
import Imessage from '../../components/Imessage/Imessage';
import './style/App.css';
class App extends Component {
	/*--- State ---*/
	/*--- Handle Methods ---*/
	/*--- Lifecycle Methods ---*/
	render() {
		return (
			<div className='app'>
				<Imessage />
			</div>
		);
	}
}
export default App;
