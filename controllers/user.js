const user = require('../models/user')

exports.userById = (req, res, next, id) => {
    user.findById(id).exec((error, user)=>{
        if(error || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }

        req.profile = user;
        next();
    })
}