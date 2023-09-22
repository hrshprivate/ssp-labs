const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('user', UserSchema)

module.exports = User
