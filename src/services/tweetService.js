import { Filter } from "bad-words";
import { createTweet as createTweetRepository , 
         getTweets as getTweetsRepository,
         getTweetById as getTweetByIdRepository
 } from "../repositries/tweetRepository.js";

export const createTweet = async ({body,image}) => {
    const filter = new Filter ();

    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message:"Tweet contains blocked words",
            status:400
        };
    }

    const tweet = await createTweetRepository({body,image});
    return tweet;
}

export const getTweets = async () =>{
    const tweets = await getTweetsRepository();

    return tweets;
}

export const getTweetById = async (id) => {
    const tweet = await getTweetByIdRepository(id);

    if(!tweet){
        throw {
            message:'tweet not found',
            status: 404
        };
    }
    
    return tweet;

}