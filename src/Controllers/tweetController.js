import { createTweet as createTweetService } from "../services/tweetService.js";
export const  getTweets = (req,res) =>{
    return res.json({
        msg:"tweet route"
    });
}

export const getTweetsByID = (req,res) =>{
    return res.json({
        msg:"tweet route",
        id: req.params.id
    });
}

export const createTweet = async (req,res) =>{
    try{
        console.log(req.file);

        let imageUrl = null; 
        // If an image is uploaded, CloudinaryStorage will handle it
         if (req.file) {
            // The file is already uploaded to Cloudinary, get the URL directly
            imageUrl = req.file.path;
            console.log('Image URL:', imageUrl);  // Verify the uploaded image URL
        }
        
        // Passing body and image URL to the service
        const response = await createTweetService({
        body: req.body.body,
        image: imageUrl
        });


        return res.status(201).json({
            success:true,
            data:response,
            message:"tweet created successsfully"
        })
    } catch(e){
        console.log(e);
        if(e.status){
            return res.status(e.status).json({
                message:e.message,
                success:false
            })
        }
        return res.status(500).json({
            message:'Internal Server Error',
            success:false
        })
    }
}