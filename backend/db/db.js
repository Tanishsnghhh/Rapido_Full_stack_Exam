const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to DB:', process.env.DB_CONNECT);  // Log the connection string to verify it's correct
        })
        .catch(err => {
            console.error('Error connecting to DB:', err);  // Log the error if the connection fails
        });
}

module.exports = connectToDb;
