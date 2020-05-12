const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const UserSchema = mogoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: string,
    required: true,
    select: false,
    set: rawPassword => bcrypt.hashSync(rawPassword, SALT_WORK_FACTOR)
  },
  first_name: String,
  last_name: String,
  age: Number
});


module.exports = mongoose.model('User', UserSchema);
