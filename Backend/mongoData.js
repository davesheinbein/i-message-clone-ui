const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imessageSchema = new Schema({
	chatName: { type: String },
	conversation: [
		{
			message: { type: String },
			timestamp: { type: String },
			user: {
				displayName: { type: String },
				email: { type: String },
				photo: { type: String },
				uid: { type: String },
			},
		},
	],
});

module.exports = mongoose.model(
	'conversations',
	imessageSchema
);
