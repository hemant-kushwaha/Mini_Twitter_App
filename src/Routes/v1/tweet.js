import express from 'express';
import C_uploader from '../../config/multerConfig.js'; // Import the configured Multer middleware

import { deleteTweet, getTweets } from '../../Controllers/tweetController.js';
import { getTweetById ,createTweet} from '../../Controllers/tweetController.js';
import {validate} from '../../Validators/zodValidator.js'
import { tweetZodSchema } from '../../Validators/tweetZodSchema.js';
import {getTweetByIdManualValidator} from '../../Validators/tweetManualValidator.js'
const router = express.Router();

router.get('/',getTweets);

router.get('/:id',getTweetByIdManualValidator ,getTweetById);

router.post('/', C_uploader.single('tweetImage'),validate(tweetZodSchema),createTweet);

router.delete('/:id', getTweetByIdManualValidator ,deleteTweet);


export default router;

 