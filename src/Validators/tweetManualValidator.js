import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const createtweetManualValidator = (req,res,next) => {

    if(!req.body.tweet){
        return res.status(StatusCodes.BAD_REQUEST).json({
            error:'tweet is required'
        })
    }

    if(req.body.tweet.length>280){
        return res.status(StatusCodes.BAD_REQUEST).json({
            error:'tweet length is beyond limit 280 words'
        })
    }

    next();

}

export const getTweetByIdManualValidator = (req,res,next) => {

    const isValidID = mongoose.Types.ObjectId.isValid(req.params.id);

    if(!isValidID){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message:'Invalid tweet id'
        });
    }

    next();

}

