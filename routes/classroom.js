const express = require("express");
const router = express.Router();
const db = require("../db/db");

// CREATE TABLE classrooms (branchYear INT NOT NULL, branchName VARCHAR(50) NOT NULL, subjectName VARCHAR(50) NOT NULL, subjectCode CHAR(7) NOT NULL, subGroups INT NOT NULL, classroomCode VARCHAR(10) NOT NULL, PRIMARY );


router.post("/classroom", async (req, res) =>
{
    const {branchYear, branchName, subjectName, subjectCode, subGroups} = req.body;
    const classroomCode = "s0m3th1ng";
    await db.query("SELECT * FROM classrooms WHERE branchYear = ? AND branchName = ? AND subjectName = ?", 
                [parseInt(branchYear), branchName, subjectName], (err, results, fields) =>
                {
                    if(err)
                    {
                        throw new Error(err);
                    }
                    if(results.length === 0)
                    {
                        db.query("INSERT INTO classrooms VALUES (?, ?, ?, ?, ?, ?)", 
                                    [branchYear, branchName, subjectName, subjectCode, subGroups, classroomCode],
                                    (err, results, fields) =>
                                    {
                                        if(err)
                                        {
                                            throw new Error(err);
                                        }
                                        else
                                        {
                                            res.status(200).send("Created Classroom.");
                                        }
                                    })
                    }
                    res.status(200).send();
                });
});

module.exports = router;