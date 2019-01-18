var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { deleteGCS } = require('../helpers')


const gifSchema = new Schema({
  title: String,
  categories: String,
  gif_url: String,
  gif_filename: String,
  like: {
    type: Number,
    default: 0
  }
})

gifSchema.pre('remove', function (next) {
  
  deleteGCS(this.gif_filename)
    .then(response => {
      next();
    })
    .catch(error => {
      throw error;
    })
})

const Gif = mongoose.model('Gif', gifSchema);

module.exports = Gif;