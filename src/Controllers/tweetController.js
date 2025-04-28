import { StatusCodes } from "http-status-codes";
import { createTweet as createTweetService,
         getTweets as getTweetsService ,
         getTweetById as getTweetByIdService} from "../services/tweetService.js";


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
        console.log(e);
        if (e.status) {
            return res.status(e.status).json({
                message: e.message,
                success: false
            })
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Internal Server Error',
            success: false
        })
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

        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Internal Server Error',
            success: false
        });
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

        console.log(error);
        if (error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false,
            });
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Internal Server Error',
            success: false
        });
    }

}