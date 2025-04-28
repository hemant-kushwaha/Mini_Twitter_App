import mongoose, { Mongoose } from "mongoose";

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,
        maxlength:280
    },
    image: {
        type: String, // Store image URL as string
        default: null, // optional
    },
   
},{ timestamps: true });

const Tweet =  mongoose.model("tweet",tweetSchema); //tweet Collection

export default Tweet;
