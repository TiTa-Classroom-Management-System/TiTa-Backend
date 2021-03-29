const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.post("/create", async (req, res) =>
{
    const {subjectName, subjectCode, subGroups} = req.body;
    let classroom_id = "asdfghjkl";
    await db.query("SELECT * FROM classrooms where classroom_id = ?", 
                [classroom_id], (err, results, fields) =>
                {
                    if(err)
                    {
                        throw new Error(err);
                    }
                    if(results.length === 0)
                    {
                        try
                        {
                                db.query("INSERT INTO classrooms VALUES (?, ?, ?, ?)", 
                                [classroom_id, subjectName, subjectCode, subGroups],
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
                                });
                                for(let i=1;i<=subGroups;i++){
                                    db.query("INSERT INTO sub_class(class_id,grp_no) VALUES (?,?)",
                                    [classroom_id,parseInt(i)],
                                    (err,results,field)=>
                                    {
                                        if(err)
                                        {
                                            throw new Error(err);
                                        }
                                        // else
                                        // {
                                        //     res.status(200).send("Created SubClassroom.");
                                        // }
                                    })
                                }                                
                        }
                        catch (err)
                        {
                            throw new Error(err);
                        }
                    }
                });
});

module.exports = router;