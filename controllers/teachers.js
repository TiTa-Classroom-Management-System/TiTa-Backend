const db = require("../db/db");

const login = (req, res) => {
  const { email, name } = req.body;
  db.query(
    "SELECT * FROM teachers WHERE email = ?",
    [email],
    (err, results, fields) => {
      if (err) {
        throw new Error(err);
      }
      if (results.length === 0) {
        db.query(
          "INSERT INTO teachers (name, email) VALUES (?, ?)",
          [name, email],
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
    "SELECT class_id, tt_id, start_time, end_time, day, type, course_name, course_code FROM timetable t JOIN (SELECT class_id, sub_class_id, course_name, course_code FROM sub_class s JOIN classrooms c ON s.class_id = c.classroom_id WHERE sub_class_id IN (SELECT sub_class_id FROM teach_class WHERE tid IN (SELECT tid FROM teachers WHERE email = ?))) u ON t.sub_class_id = u.sub_class_id;",
    [email],
    (err, results, fields) => {
      if (err) throw new Error(err);
      res.status(200).send(results);
    }
  );
};

const getClassrooms = (req, res) => {
  const email = req.params.email;
  db.query(
    "select classroom_id, course_name, course_code, branchName, branchYear from classrooms where classroom_id in (select class_id from sub_class where sub_class_id in (select sub_class_id from teach_class where tid in (select tid from teachers where email = ?)))",
    [email],
    (err, results, fields) => {
      if(err) throw new Error(err);
      res.status(200).send(results);
    }
  );
};

module.exports = { login, getTimeTable, getClassrooms };
