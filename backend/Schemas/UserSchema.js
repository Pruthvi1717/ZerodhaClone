const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please fill a valid email address"],
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },

  // optional: roles, createdAt, metadata
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
},
{
  timestamps: true
});

module.exports= {UserSchema};