const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
    // get token from header
    const token = req.header('x-auth-token')

    // check if no token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied'})
    }

    // verify token
    try {
        // console.log('the req token', token)
        // console.log('the jwtsecret', config.get('jwtSecret'))
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded.user
        next()
    } catch (err) { // if not a valid token
        res.status(401).json({ msg: 'Token is not valid' })
    }
}