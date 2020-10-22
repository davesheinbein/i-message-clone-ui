const mongoose = require('mongoose');

const imessageSchema = mongoose.Schema({
    chatName: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
})

module.exports = mongoose.model('conversations', imessageSchema)