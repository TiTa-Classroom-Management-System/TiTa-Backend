const db = require("../db/db");

const{upload}=require("../controllers/cloudinary");

const createAssignment=async (req,res)=>{
    let {assignment_name,creation_date,submission_date,classroom_id,subGroups,link}=req.body;
    db.query(
        "INSERT INTO assignment (assignment_name,creation_date,submission_date,assignment_link) VALUES (?, ?, ?, ?)",
        [assignment_name,creation_date,submission_date,link],
        (err, results, fields) => {
            if(err) {
                throw new Error(err);
            }
            db.query(
                "SELECT assignment_id FROM assignment WHERE assignment_link = ?",
                [link],
                (err, results, fields) => {
                    if (err) {
                        throw new Error(err);
                    }
                    const assignment_id = results[0].assignment_id;
                    subGroups = subGroups.split(",");
                    for(let i=0; i<subGroups.length; i++){
                        db.query(
                            "SELECT sub_class_id FROM sub_class WHERE grp_no=? AND class_id=?",
                            [subGroups[i], classroom_id],
                            (err, results, fields) => { 
                                if(err){
                                    throw new Error(err);
                                }
                                const sub_class_id = results[0].sub_class_id;
                                db.query(
                                    "INSERT INTO assignment_subclass VALUES (?, ?)",
                                    [assignment_id, sub_class_id],
                                    (err, results, fields) => {
                                        if(err) {
                                            throw new Error(err);
                                        }
                                    }
                                );
                            }
                        );
                    }
                    res.status(200).send(results);
                }
            );
        }
    )
    
}

module.exports = { createAssignment};