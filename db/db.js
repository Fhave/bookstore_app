const mongoose = require('mongoose');
require('dotenv').config();

const {MONGO_URI} = process.env;

const connectDB = () => {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
  })
  .then(() => {
    console.log("MongoDB Connected.....")

    // Seed data
  })
  .catch((err) => {
    console.error(err.message);

    // Exit with failure
    process.exit(1);
  })
}

module.exports = connectDB;