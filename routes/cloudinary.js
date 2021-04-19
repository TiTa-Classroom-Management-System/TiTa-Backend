const express=require('express');
const router=express.Router();

const{upload}=require("../controllers/cloudinary");

router.post('/uploadFile',upload);

module.exports=router;
