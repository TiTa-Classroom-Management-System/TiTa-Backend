const db = require("../db/db");

const login = (req, res) => {
  const { email, name } = req.body;
  db.query(
    "SELECT * FROM students WHERE email = ?",
    [email],
    (err, results, fields) => {
      if (err) {
        throw new Error(err);
      }
      if (results.length === 0) {
        console.log(name.substr(2, 10), name.substr(11), email);
        db.query(
          "INSERT INTO students (sid, name, email) VALUES (?, ?, ?)",
          [parseInt(name.substr(2, 10)), name.substr(11), email],
          (err, results, fields) => {
            if (err) {
              throw new Error(err);
            } else {
              res.status(200).send();
            }
          }
        );
      }
      res.status(200).send();
    }
  );
};

const getTimeTable = (req, res) => {
  const email = req.params.email;
  db.query(
    "SELECT class_id, tt_id, start_time, end_time, day, type, course_name, course_code FROM timetable t JOIN (SELECT class_id, sub_class_id, course_name, course_code FROM sub_class s JOIN classrooms c ON s.class_id = c.classroom_id WHERE sub_class_id IN (SELECT sub_class_id FROM stud_class WHERE sid IN (SELECT sid FROM students WHERE email = ?))) u ON t.sub_class_id = u.sub_class_id;",
    [email],
    (err, results, fields) => {
      if (err) throw new Error(err);
      res.status(200).send(results);
    }
  );
};

module.exports = { login, getTimeTable };
