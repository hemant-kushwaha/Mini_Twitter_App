import express from 'express';
import { getTweets } from '../../Controllers/tweetController.js';
import { getTweetsByID ,createTweet} from '../../Controllers/tweetController.js';

const router = express.Router();

router.get('/',getTweets);

router.get('/:id',getTweetsByID);

router.post('/',createTweet);


export default router;

