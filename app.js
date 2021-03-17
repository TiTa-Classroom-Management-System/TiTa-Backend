const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
require("./db/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentRouter = require("./routes/students");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/students", studentRouter);

module.exports = app;
