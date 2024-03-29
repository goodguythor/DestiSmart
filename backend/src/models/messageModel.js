const mongoose = require('mongoose');

const Schema = mongoose.Schema
const messageModel = new Schema ({
  conversationID: {
    type: String,
    required: true
  },
  senderID: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('message', messageModel);