import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"




          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOdCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const Response =await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been upload successfull
        console.log("file is uploaded and clouduinary",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved tempory file as the upload operation got failed
        
    }
}

export {uploadOdCloudinary}


// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });