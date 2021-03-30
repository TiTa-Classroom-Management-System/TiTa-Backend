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

const getTimeTable = (req, res) => {};

module.exports = { login, getTimeTable };
