import { StatusCodes } from "http-status-codes";
import { createTweet as createTweetService,
         getTweets as getTweetsService ,
         getTweetById as getTweetByIdService,
         deleteTweet as deleteTweetService,
         updateTweet as updateTweetService} from "../services/tweetService.js";
import {errorResponse} from '../utils/responses.js'


export const createTweet = async (req, res) => {
    try {
        console.log(req.file);

        let imageUrl = null;
        if (req.file) {
            // The file is already uploaded to Cloudinary, getting the URL directly
            imageUrl = req.file.path;
            console.log('Image URL:', imageUrl);
        }

        const response = await createTweetService({
            body: req.body.body,
            image: imageUrl
        });


        return res.status(StatusCodes.CREATED).json({
            success: true,
            data: response,
            message: "tweet created successsfully"
        })
    } catch (e) {
        return errorResponse(error);
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();

        return res.status(StatusCodes.OK).json({
            success: true,
            data: response,
            message: "tweets fetched sucessfully"
        });

    } catch (error) {

        return errorResponse(error);

    }

}

export const getTweetById = async (req,res) => {
    try {
        const response = await getTweetByIdService(req.params.id);

        return res.status(StatusCodes.OK).json({
            success: true,
            data: response,
            message: "tweets fetched sucessfully"
        });

    } catch (error) {

        return errorResponse(error);

    }

}

export const deleteTweet = async (req,res) => {
    try{

        const response = await deleteTweetService(req.params.id);

        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'Successfully deleted the tweet', 
            data :response
        })

    } catch (error) {
        return errorResponse(error);

    }
}

export const updateTweet = async (req,res) =>{
    try {
        const response = await updateTweetService(req.params.id, req.body.body);

        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'Successfully updated the tweet', 
            data :response
        })
        
    } catch (error) {
       return errorResponse(error);
    }
}