import express from 'express';
import { getTweets } from '../../Controllers/tweetController.js';
import { getTweetsByID ,createTweet} from '../../Controllers/tweetController.js';
import {validate} from '../../Validators/zodValidator.js'
import { tweetZodSchema } from '../../Validators/tweetZodSchema.js';
const router = express.Router();

router.get('/',getTweets);

router.get('/:id',getTweetsByID);

router.post('/',validate(tweetZodSchema),createTweet);


export default router;

 