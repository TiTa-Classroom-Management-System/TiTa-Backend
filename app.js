const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
<<<<<<< HEAD
const fs = require("fs");
=======
>>>>>>> 2ed19baed75f3304389aa4631d0641270a024ab8
require("dotenv").config();
require("./db/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentRouter = require("./routes/students");
const teacherRouter = require("./routes/teachers");
const classroomRouter = require("./routes/classroom");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


//routes dynamically
fs.readdirSync('./routes').map((route) => app.use("/api", require(`./routes/${route}`)))

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/students", studentRouter);
// app.use("/teachers", teacherRouter);
// app.use("/classrooms", classroomRouter);

module.exports = app;
