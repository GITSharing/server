const { Gif } = require('../models');
class GifController {
  static create (req, res) {
    console.log(req.file);
    Gif.create({
      title: req.body.title,
      categories: req.body.categories,
      gif_url: req.file.cloudStoragePublicUrl,
      gif_filename: req.file.cloudStorageObject
    })
      .then(gif => {
        res.status(201).json(gif);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Internal Server Errors',
          error: error
        })
      })
  }

  static getAll (req, res) {
    Gif.find()
      .then(gifs => {
        res.status(200).json(gifs);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Internal Server Errors',
          error: error
        })
      })
  }

  static delete(req, res) {
    Gif.findById(req.params.id)
      .then(gif => {
        if (gif) {
          gif.remove();
          res.status(200).json(gif)
        } else {
          res.status(400).json({
            message: 'Gif Not Found'
          })
        }
      })

      .catch(error => {
        res.status(200).json({
          message: 'Internal Server Error',
          error: error
        })
      })
    }
}

module.exports = GifController;