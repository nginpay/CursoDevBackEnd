require('dotenv').config()
const express = require("express");
const cors = require("cors");
const compression = require("compression")

const mysql = require('mysql');
const connection = require('./config/config');

const app = express();
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./routes/app.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});