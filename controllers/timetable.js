const db = require("../db/db");

const createTimetable = async (req, res) => {
  const { class_id, group_number, start_time, end_time, day, type } = req.body;
  var sub_class_id = 0;
  db.query(
    "SELECT sub_class_id FROM sub_class WHERE class_id = ? AND grp_no = ?",
    [class_id, group_number],
    (err, results, fields) => {
      if (err) {
        throw new Error();
      }
      sub_class_id = results[0].sub_class_id;
      db.query(
        "SELECT * FROM timetable WHERE sub_class_id = ? AND start_time = ? AND day = ?",
        [sub_class_id, start_time, day],
        (err, results, fields) => {
          if (err) {
            throw new Error();
          }
          if (results.length === 0) {
            db.query(
              "INSERT into timetable (sub_class_id, start_time, end_time, day, type) VALUES (?, ?, ?, ?, ?)",
              [sub_class_id, start_time, end_time, day, type],
              (err, results, fields) => {
                if (err) {
                  throw new Error();
                }
              }
            );
          }
        }
      );
      res.status(200).send("Time Table Created.");
    }
  );
};

module.exports = { createTimetable };
