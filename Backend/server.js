// Import dependencies

const express = require('express');
const mongoose = require('mongoose');
const pusher = require('pusher');
const cors = require('cors');
const logger = require('morgan');

const mongoData = require('./mongoData.js');

// app config
const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// db config
const mongoURI = process.env.DATABASE_URL;

// console.log(mongoURI);

mongoose.connect(mongoURI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
	console.log('Mongo Data Database Connected! 🤖');
});

// api routes
app.get('/', (req, res) =>
	res.status(200).send('Hello this is working')
);

app.post('/new/conversation', (req, res) => {
	const dbData = req.body;

	console.log(req, '<< req');

	mongoData.create(dbData, (err, data) => {
		if (err) {
			res.status(500).send(err);
			console.log(
				err,
				'<<< 💥 Error creating new conversation...'
			);
		} else {
			res.status(201).send(data);
			console.log(data, '<<< 👍 Data');
		}
	});
});

app.post('/new/message', (req, res) => {
	mongoData.update(
		{ _id: req.query.id },
		{ $push: { conversation: req.body } },
		(err, data) => {
			if (err) {
				console.log(err, '<<< 💥 Error saving message...');
				res.status(500).send(err);
			} else {
				res.status(201).send(data);
				console.log(data, '<<< 👍 Data');
			}
		}
	);
});

app.get('/get/conversationList', (req, res) => {
	mongoData.find((err, data) => {
		if (err) {
			console.log(err, '<<< 💥 Error finding message...');
			res.status(500).send(err);
		} else {
			data.sort((b, a) => {
				return a.timestamp - b.timestamp;
			});

			let conversations = [];

			data.map((conversationData) => {
				const conversationInfo = {
					id: conversationData._id,
					name: conversationData.chatName,
					timestamp:
						conversationData.conversation[0].timestamp,
				};
				conversations.push(conversationInfo);
			});
			console.log(conversations, '<<< 🔍 message found');
			res.status(200).send(conversations);
		}
	});
});

app.get('/get/conversation', (req, res) => {
	const id = req.query.id;

	mongoData.find({ _id: id }, (err, data) => {
		if (err) {
			res.status(500).send(err);
			console.log(err, '<<< 💥 Error finding message...');
		} else {
			res.status(200).send(data);
			console.log(data, '<<< 👍 Data');
		}
	});
});

app.get('/get/lastMessage', (req, res) => {
	const id = req.query.id;

	mongoData.find({ _id: id }, (err, data) => {
		if (err) {
			res.status(500).send(err);
			console.log(err, '<<< 💥 Error finding message...');
		} else {
			let convData = data[0].conversation;

			convData.sort((b, a) => {
				return a.timestamp - b.timestamp;
			});

			res.status(200).send(convData[0]);
			console.log(convData[0], '<<< 👍 convData[0]');
		}
	});
});

// listen
app.listen(port, function () {
	console.log(`Express app listening on port ${port} 🚀`);
});
