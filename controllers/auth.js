const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt', { algorithms: ['RS256']}) //for authorisation check
const {errorHandler} = require('../helpers/dbErrorHandler');
const user = require('../models/user');

exports.signup = (req, res)=>{
    console.log('req.body', req.body)
   const user = new User(req.body)
   user.save((err, user)=>{
       if(err) {
           return res.status(400).json({
               err: errorHandler(err)
           })
       }
       user.salt = undefined;
       user.hashed_password = undefined; 

       res.json({ user})
   })
};

exports.signin = (req, res) =>{
    // find the user based on email
    const {email, password} = req.body;

    user.findOne({email}, (error, user)=>{
        if (error || !user){
            return res.status(400).json({
                error: 'User with this email does not exist. PLease signup '
            })
        }
        // if the user is found make sure the email and password match
        // Create authentication method in the user model

        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'Email and Password do not match'
            })
        }

        // generate a signed token with user id and secret

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

        //  persist the token as 't'  in the cookie with the expiry date

        res.cookie('t', token, {expire: new Date() + 9999})

        // return response with user and token to frontend client

        const {_id, name, email, role} = user;
        return res.json({token, user: {_id,name, email, role}})
    });

};

exports.signout = (req, res ) => {
    res.clearCookie('t')
    res.json({message: 'Signout successfull'})
}

exports.requireSignin = expressJwt({
    secret:  process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: "auth"
});