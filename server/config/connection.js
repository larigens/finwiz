const mongoose = require('mongoose'); // To connect to the MongoDB.
require("dotenv").config(); // To use environment variables.

mongoose.set('strictQuery', false);

// Wrap Mongoose around local connection to MongoDB.
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/finwiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Export connection 
module.exports = mongoose.connection;
