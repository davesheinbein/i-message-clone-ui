import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAuqwirrVozy1X7Mi9isDdti_X2ugtr9cs',
	authDomain: 'i-message-ui.firebaseapp.com',
	databaseURL: 'https://i-message-ui.firebaseio.com',
	projectId: 'i-message-ui',
	storageBucket: 'i-message-ui.appspot.com',
	messagingSenderId: '209410004640',
	appId: '1:209410004640:web:f700e678f4d50b0c3d1bc5',
	measurementId: 'G-GBWPPMN633',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// database
const db = firebaseApp.firestore();
// authentication
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
