const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation');


router.post('/register', async (req, res)=>{
    // Let's validate the data before make the User
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check if the user already in the DB
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists');

    // Create a new user
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;