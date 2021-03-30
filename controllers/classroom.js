const db = require("../db/db");

const createClassRoom = async (req, res) => {
  const { subjectName, subjectCode, subGroups, email } = req.body;
  let classroom_id = "asdfghjft";
  db.query(
    "SELECT tid FROM teachers where email = ?",
    [email],
    (err, results, fields) => {
      if (err){
        throw new Error(err);
      }
      const tid = results[0].tid;
      db.query(
        "SELECT * FROM classrooms where classroom_id = ?",
        [classroom_id],
        (err, results, fields) => {
          if (err) {
            throw new Error(err);
          }
          if (results.length === 0) {
            try {
              db.query(
                "INSERT INTO classrooms VALUES (?, ?, ?, ?)",
                [classroom_id, subjectName, subjectCode, subGroups],
                (err, results, fields) => {
                  if (err) {
                    throw new Error(err);
                  } 
                  for (let i = 1; i <= subGroups; i++) {
                    db.query(
                      "INSERT INTO sub_class(class_id,grp_no) VALUES (?,?)",
                      [classroom_id, parseInt(i)],
                      (err, results, fields) => {
                        if (err) {
                          throw new Error(err);
                        }
                        db.query(
                          "SELECT sub_class_id FROM sub_class WHERE class_id = ?",
                          [classroom_id],
                          (err, results, fields) => {
                            if(err) {
                              throw new Error(err);
                            }
                            db.query(
                              "INSERT INTO teach_class(tid, sub_class_id) VALUES (?, ?)",
                              [tid, results[i-1].sub_class_id],
                              (err, results, fields) => {
                                if(err) {
                                  throw new Error(err);
                                }
                              } 
                            );
                          }
                        );
                      }
                    );
                  }
                  res.status(200).send(results);
                }
              );
            } catch (err) {
              throw new Error(err);
            }
          }
        }
      );
    }
  );
};

module.exports = { createClassRoom };
