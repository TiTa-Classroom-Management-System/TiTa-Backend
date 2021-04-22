const cloudinary=require("cloudinary");

//config
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

exports.upload=async (req,res,next)=>{
    console.log('cloudinary',req.body);
    try{
        let result=await cloudinary.uploader.upload(req.files.file.tempFilePath,{
            use_filename:true,
            resource_type:'auto' 
        });
        console.log(result);
        req.body.public_id=result.public_id;
        req.body.link=result.secure_url;
        console.log(result.secure_url)
        console.log('uploaded')
        next();
    }
    catch(err){
        // throw new Error(err);
        next(err)
    }
    
    // res.json({
    //     public_id:result.public_id,
    //     url:result.secure_url,
    // })
    
}