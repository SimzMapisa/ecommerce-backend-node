exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email required')
                .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                .withMessage('Please put a valid email')
                .isLength({
                    min: 4,
                    max: 32
                })
                .notEmpty();

    req.check('password', 'Password is required').notEmpty();
    req.check('password')
                .isLength({min:6})
                .withMessage('Password must contain at least 6 characters')
                .matches(/\d/)
                .withMessage('Password must contain at least 1 digit');

                const errors = req.validationErrors();

                if(errors){
                    const firstError = errors.map(error => error.msg)[0];
                    return res.status(400).json({error: firstError});
                }
                next(); 

}