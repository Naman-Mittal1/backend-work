const mongoose = require('mongoose')
require('dotenv').config();

const mongoURI = process.env.MONGODB
// const mongoURI = "mongodb+srv://copier:copier@cluster0.jsh918h.mongodb.net/copier";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })