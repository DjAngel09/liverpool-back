const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  secondLastnamne: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("User", UserSchema);