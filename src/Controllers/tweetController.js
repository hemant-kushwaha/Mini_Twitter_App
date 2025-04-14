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

export const createTweet = (req,res) =>{
    return res.json({
        msg:"tweet route",
        body: req.body
    });
}