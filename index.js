const express = require("express");
const cors = require("cors");
const db = require('./connect.js');
const dotenv = require('dotenv');
const movieRouter = require('./router/movierouter');
//dotenv configuration 
dotenv.config();
//call to the database function
db();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies",movieRouter);


// making the app listening to the port 
app.listen(process.env.PORT);