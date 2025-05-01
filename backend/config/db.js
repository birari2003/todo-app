const mongoose = require('mongoose');

// This file is for the connection with data base namely todoapp
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // this uri is taking from .env file
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;

