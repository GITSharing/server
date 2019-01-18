const { Comment, Gif } = require('../models');

class CommentController {
  static create(req, res) {
    Gif.findById(req.params.id)
      .then( gif => {
        if (gif) {
          res.status(400).json({
            message: 'Gif Not Found'
          })
        } else {
          return Comment.create({
            comment: req.body.comment,
            gifId: req.params.id,
            userId: req.user
          })
        }
      })
      .then(comment => {
        res.status(201).json(comment)
      })
      .catch(error => {
        res.status(500).json({
          message: 'Internal Server Error',
          error: error
        })
      })
  }

  static update(req, res) {
    
  }
}