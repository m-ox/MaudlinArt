const express = require('express')
const connectDB = require('./config/db');
const cors = require('cors');
const cookieSession = require('cookie-session')


const app = express()
const { check, validationResult } = require("express-validator");

// Connect Database
connectDB();

// Init Middlware
app.use(express.json({ extended: false }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
  });
  app.set('trust proxy', 1)
  app.use(
      cookieSession({
        name: "__session",
        keys: ["key1"],
          maxAge: 24 * 60 * 60 * 100,
          secure: true,
          httpOnly: true,
          sameSite: 'none'
      })
  );

//Define routes
app.use('/api/artwork', require('./api/artwork'))

app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))