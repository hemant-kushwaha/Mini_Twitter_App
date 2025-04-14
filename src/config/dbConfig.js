import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js";

export default async function connectDB() {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDb");

    } catch(error) {
        console.log("Failed to connect to MongoDb Server");
        console.log(error);
    }
}