const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.post("/create", async (req, res) =>
{
    const {subjectName, subjectCode, subGroups} = req.body;
    let classroom_id = 1;
    await db.query("SELECT * FROM classrooms where classroom_id = ?", 
                [parseInt(classroom_id)], (err, results, fields) =>
                {
                    if(err)
                    {
                        throw new Error(err);
                    }
                    if(results.length === 0)
                    {
                        db.query("INSERT INTO classrooms VALUES (?, ?, ?, ?)", 
                                    [classroom_id, subjectName, subjectCode, subGroups],
                                    (err, results, fields) =>
                                    {
                                        if(err)
                                        {
                                            throw new Error(err);
                                            return;
                                        }
                                        else
                                        {
                                            res.status(200).send("Created Classroom.");
                                            return;
                                        }
                                    })
                    }
                });
});

module.exports = router;