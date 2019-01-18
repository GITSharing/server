const {User} = require('../models')

class UserController {
    static create (req, res) {
        User.create({
            email: req.user.email,
            usernme: req.user.username
        })
        .then(user => {
            res.status(201).json({user})
        })
        .catch(err => {
            res.status(500).json({
                msg: 'Internal Server Error'
            })
        })
    }

}

module.exports = UserController