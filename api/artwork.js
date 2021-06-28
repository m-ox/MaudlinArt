const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require('../middleware/auth')

let Artwork = require('../models/Artwork');
let User = require('../models/User')

const config = require('config');
const { json } = require('express');

// GET /
// get all artwork
router.get('/', async (req, res) => {
    try {
        const artwork = await Artwork.find()

        res.json(artwork)
    } catch {
        console.error(err.message)
        res.status(500).send('Could not retrieve artwork')
        }
    }
)

// GET /:id
// get an individual artwork
router.get('/:id', async (req, res) => {
    try {
        const artwork = await Artwork.findById(req.params.id)

        if (!artwork) {
            return res.status(404).json({ msg: 'This artwork cannot be found!'})
        }

        res.json(artwork)

    } catch(err) {
        console.error(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'This artwork cannot be found!'})
        }
        res.status(500).send('There was an error getting that artwork')
    }
})


// POST /artwork
// add an artwork
router.post('/', [auth,
    check('title', 'A title is required').not().isEmpty(),
    check('url', 'A url is required').not().isEmpty(),
    check('medium', 'A form of medium is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {

            const user = await User.findById(req.user.id).select('-password')

            const newArtwork = new Artwork({
                title: req.body.title,
                url: `https://i.imgur.com/${req.body.url}`,
                description: req.body.description,
                medium: req.body.medium,
                user: user.id
            })

            const artwork = await newArtwork.save()

            res.json(artwork)
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Could not create new artwork')
        }  
})

//PATCH /:id
// update the artwork's details
router.patch('/:id', auth,
    async (req, res) => {

        try {
            const user = await User.findById(req.user.id).select('-password')

            let artwork = await Artwork.findById(req.params.id)

            console.log('the req id', req.params.id)
            console.log('artwork associated with user', artwork)

            // Check user
            if(artwork.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'User not authorized'})
            }
    
            if (!artwork) {
                return res.status(404).json({ msg: 'This artwork doesn\'t exist!'})
            }

                const {
                title,
                url,
                medium,
                description
            } = req.body

            const newDetails = {
                title: title || artwork.title,
                url: url || artwork.url,
                medium: medium || artwork.medium,
                description: description || artwork.description
            }
    
            updatedArtwork = await Artwork.findByIdAndUpdate(
                    { _id: req.params.id },
                    { ...newDetails }
            )

            // console.log('req body:', req.body)
            // console.log('artwork id\'d:', artwork)
            // console.log('new details:', newDetails)
    
            res.json({ msg: `${artwork.title} has been updated`})
    
        } catch(err) {
            console.error(err.message)
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Artwork not found by that ID'})
            }
            res.status(500).send('Server experienced an unexpected error')
        }
})



// DELETE /:id
// delete an individual artwork
router.delete('/:id', auth, async (req, res) => {
    try {
        const artwork = await Artwork.findById(req.params.id)

        if (!artwork) {
            return res.status(404).json({ msg: 'This artwork doesn\'t exist!'})
        }

        // Check user
        if(artwork.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized'})
        }

        await artwork.remove()

        res.json({ msg: 'Artwork deleted'})

    } catch(err) {
        console.error(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Artwork not found by that ID'})
        }
        res.status(500).send('Server experienced an unexpected error')
    }
})


module.exports = router