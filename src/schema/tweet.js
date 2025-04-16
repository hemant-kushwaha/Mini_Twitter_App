import mongoose, { Mongoose } from "mongoose";

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,
        maxlength:280
    }
});

const Tweet =  mongoose.model("tweet",tweetSchema); //tweet Collection

export default Tweet;
