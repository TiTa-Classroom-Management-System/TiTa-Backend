const db = require("../db/db");

const{upload}=require("../controllers/cloudinary");

const createAssignment=async (req,res)=>{
    let {assignment_name,creation_date,submission_date,classroom_id,subGroups,assignment_link}=req.body;
    console.log('link',assignment_name,assignment_link)
    db.query(
        "INSERT INTO assignment (assignment_name,creation_date,submission_date,assignment_link) VALUES (?, ?, ?, ?)",
        [assignment_name,creation_date,submission_date,assignment_link],
        (err, results, fields) => {
            if(err) {
                throw new Error(err);
            }
            db.query(
                "SELECT assignment_id FROM assignment WHERE assignment_link = ?",
                [assignment_link],
                (err, results, fields) => {
                    if (err) {
                        throw new Error(err);
                    }
                    const assignment_id = results[0].assignment_id;
                    console.log(assignment_id);
                    subGroups=JSON.parse(subGroups);
                    for(let i=0; i<subGroups.length; i++){
                        console.log(subGroups[i]);
                        db.query(
                            "SELECT sub_class_id FROM sub_class WHERE grp_no=? AND class_id=?",
                            [subGroups[i], classroom_id],
                            (err, results, fields) => { 
                                console.log(results)
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