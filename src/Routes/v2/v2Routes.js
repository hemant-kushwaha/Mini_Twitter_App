import express from 'express';
import tweetRouter from './tweet.js'

const router = express.Router();

router.use('/tweets',tweetRouter);

export default router;