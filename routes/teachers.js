const express = require('express');
const db = require('../db/db');
const route = express.Router();

route.post("/login", (req, res) => {
    const {email, name} = req.body;
    db.query("SELECT * FROM teachers WHERE email = ?", [email], (err, results, fields) => {
        if (err) {
            throw new Error(err);
        }
        if (results.length === 0) {
            db.query("INSERT INTO teachers (name, email) VALUES (?, ?)", [name, email], (err, results, fields) => {
                if (err) {
                    throw new Error(err);
                } else {
                    res.status(200).send();
                }
            });
        }
        res.status(200).send();
    });
});

module.exports = route;