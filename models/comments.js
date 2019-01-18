var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  userId: {
    type: 'ObjectId',
    ref: 'User'
  },
  gifId: {
    type: 'ObjectId',
    ref: 'Gif'
  }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;