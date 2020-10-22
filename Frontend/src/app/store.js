import { configureStore } from '@reduxjs/toolkit';
// check features folder
import userReducer from '../features/userSlice';
import chatReducer from '../features/chatSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		chat: chatReducer,
	},
});
