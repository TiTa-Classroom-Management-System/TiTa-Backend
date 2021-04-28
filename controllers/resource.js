const db = require("../db/db");

const{upload}=require("../controllers/cloudinary");

const createResource = (req, res) => {
    let { classroom_id, subGroups, resource_name, link, description, uploaded_at } = req.body;
    db.query(
        "INSERT INTO resources (name, link, description, uploaded_at) VALUES (?, ?, ?, ?)",
        [resource_name, link, description, uploaded_at],
        (err, results, fields) => {
            if(err) {
                throw new Error(err);
            }
            db.query(
                "SELECT id FROM resources WHERE link = ?",
                [link],
                (err, results, fields) => {
                    if (err) {
                        throw new Error(err);
                    }
                    const resource_id = results[0].id;
                    subGroups = subGroups.split(",");
                    for(let i=0; i<subGroups.length; i++){
                        db.query(
                            "SELECT sub_class_id FROM sub_class WHERE grp_no = ? AND class_id = ?",
                            [subGroups[i], classroom_id],
                            (err, results, fields) => {
                                if(err){
                                    throw new Error(err);
                                }
                                const sub_class_id = results[0].sub_class_id;
                                db.query(
                                    "INSERT INTO sub_resources (resource_id, sub_class_id) VALUES (?, ?)",
                                    [resource_id, sub_class_id],
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
    );
}

module.exports = { createResource };