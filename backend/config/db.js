const mongoose = require('mongoose');


// This file is for the connection with data base namely todoapp
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};


module.exports = connectDB;

