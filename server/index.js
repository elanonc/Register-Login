require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const routes_auth = require("./router/auth.routes");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // add by me
app.use(cors());

// routes
app.use(routes_auth);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));