export const createtweetManualValidator = (req,res,next) => {

    if(!req.body.tweet){
        return res.status(400).json({
            error:'tweet is required'
        })
    }

    if(req.body.tweet.length>280){
        return res.status(400).json({
            error:'tweet length is beyond limit 280 words'
        })
    }

    next();

}

