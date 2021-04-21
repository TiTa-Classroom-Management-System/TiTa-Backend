const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: "tita",
  timezone: "UTC+0"
});

connection.connect((err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Connected to db");
  }
});

module.exports = connection;
