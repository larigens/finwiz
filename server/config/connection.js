const mongoose = require('mongoose'); // To connect to the MongoDB.
require("dotenv").config(); // To use environment variables.

// Wrap Mongoose around local connection to MongoDB.
mongoose.connect(
    process.env.MONGODB_URI || process.env.DB_NAME, { // Connection string to local instance of MongoDB including database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

// Export connection 
module.exports = mongoose.connection;