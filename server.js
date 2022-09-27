const express = require('express');
const connectDB = require('./db/db');
require('dotenv').config();
const {PORT} = process.env;

const app = express();

connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.json({message: "Trial"}));

const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`app running on port ${port}`))