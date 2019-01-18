var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  followerId: [
    {
      type:'ObjectId',
      ref: 'User'
    }
  ],
    followingId: [
      {
        type: 'ObjectId',
        ref: 'User'
      }
  ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;