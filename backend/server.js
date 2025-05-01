const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoute = require("./routes/todoRoute")
const connectDB = require('./config/db');

const app = express();

dotenv.config();
connectDB(); // adding and connecting the database here 

app.use(cors());
app.use(express.json())

app.use('/api', todoRoute);

// conncting with server with port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

