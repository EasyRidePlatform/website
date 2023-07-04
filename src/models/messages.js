const mongoose = require("mongoose");

const msg = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: Number, max: 10
  },
  message: {
    type: String,
  },
});

// collection
const Messages = new mongoose.model("messages", msg);

module.exports = Messages;
