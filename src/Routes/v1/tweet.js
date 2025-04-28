import express from 'express';
import C_uploader from '../../config/multerConfig.js'; // Import the configured Multer middleware

import { getTweets } from '../../Controllers/tweetController.js';
import { getTweetsByID ,createTweet} from '../../Controllers/tweetController.js';
import {validate} from '../../Validators/zodValidator.js'
import { tweetZodSchema } from '../../Validators/tweetZodSchema.js';
const router = express.Router();

router.get('/',getTweets);

router.get('/:id',getTweetsByID);

router.post('/', C_uploader.single('tweetImage'),validate(tweetZodSchema),createTweet);


export default router;

 