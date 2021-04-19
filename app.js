const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./db/db");

const fileupload = require('express-fileupload'); 


const indexRouter = require("./routes/index");
const studentRouter = require("./routes/students");
const teacherRouter = require("./routes/teachers");
const classroomRouter = require("./routes/classroom");
const timetableRouter = require("./routes/timetable");
const quizRouter = require("./routes/quiz");
const assignmentRouter=require("./routes/assignment");

const app = express();


app.use(fileupload({useTempFiles: true}))

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);
app.use("/classroom", classroomRouter);
app.use("/timetable", timetableRouter);
app.use("/quiz", quizRouter);
app.use("/assignment",assignmentRouter);

module.exports = app;
