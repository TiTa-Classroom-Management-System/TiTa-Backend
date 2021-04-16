const cloudinary=require("cloudinary");

//config
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

exports.upload=async (req,res)=>{
    let result=await cloudinary.uploader.upload(req.body.assignment_file,{
        use_filename:true,
        resource_type:'auto'
    });
    res.json({
        public_id:result.public_id,
        url:result.secure_url,
    })
}