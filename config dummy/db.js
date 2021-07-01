const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        mongoose.set('useFindAndModify', false);

        console.log('MongoDB Connected...')
    } catch(err) {
        console.error('MongoDB Connection Error:', error)
        // exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;