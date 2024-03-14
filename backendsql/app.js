const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mySql = require("mysql");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express);

app.listen(5000, () => {
  console.log("express listening port 5000");
});
