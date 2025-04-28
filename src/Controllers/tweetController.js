import { StatusCodes } from "http-status-codes";
import { createTweet as createTweetService,
         getTweets as getTweetsService ,
         getTweetById as getTweetByIdService,
         deleteTweet as deleteTweetService,
         updateTweet as updateTweetService} from "../services/tweetService.js";
import {errorResponse, successResponse} from '../utils/responses.js'


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


        return  successResponse(response,StatusCodes.CREATED,'tweet created sucessfully',res);

    } catch (error) {
        return errorResponse(error, res);
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();

        return successResponse(response,StatusCodes.OK,'tweets fetched sucessfully',res)

    } catch (error) {

        return errorResponse(error,res);

    }

}

export const getTweetById = async (req,res) => {
    try {
        const response = await getTweetByIdService(req.params.id);

        return successResponse(response,StatusCodes.OK,'tweet fetched sucessfully',res);

    } catch (error) {
        return errorResponse(error,res);
    }

}

export const deleteTweet = async (req,res) => {
    try{

        const response = await deleteTweetService(req.params.id);

        return successResponse(response,StatusCodes.OK,'tweet deleted sucessfully',res)

    } catch (error) {
        return errorResponse(error,res);

    }
}

export const updateTweet = async (req,res) =>{
    try {
        const response = await updateTweetService(req.params.id, req.body.body);

        return successResponse(response,StatusCodes.OK,'tweets updated sucessfully',res)
        
    } catch (error) {
       return errorResponse(error,res);
    }
}