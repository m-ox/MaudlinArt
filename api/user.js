const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require("express-validator");

const User = require('../models/User')

// @route   POST api/users 
// @desc    Register user
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password} = req.body;

    try {
        let user = await User.findOne({ email })
        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists!'}] })
        }

        user = new User({
            name,
            email,
            password
        })

        // Encrypt the password using bcrypt

        const salt = await bcrypt.genSalt(15) // the more rounds you have the more secure

        user.password = await bcrypt.hash(password, salt) // this creates a hash and puts it into the user password
        
        await user.save(); // anything that returns a promise we want to but an await

        // Return jsonwebtoken - helps us log in right away!
        const payload = {
            user: {
                id: user.id // mongoose uses an abstraction, so need for underscore
            }
        }

        // sign the token after passing in payload and secret
        jwt.sign(payload, config.get('jwtSecret'),
        { expiresIn: 360000 }, // before deployment, ideally we have it at 3600
        (err, token) => {
            if(err) throw err;
            res.json({ token })
        }) 

    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error occurred... Oops.')
    }

})

module.exports = router;