const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Not a valid email id');
      }
    },
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
  },
  phone: {
    type: String,
    required: [true, 'User WhatsApp contact number is required'],
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error('Not a valid phone number');
      }
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
