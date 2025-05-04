import express from 'express';
import C_uploader from '../../config/multerConfig.js'; // Import the configured Multer middleware

import { deleteTweet, getTweets, updateTweet } from '../../Controllers/tweetController.js';
import { getTweetById ,createTweet} from '../../Controllers/tweetController.js';
import {validate} from '../../Validators/zodValidator.js'
import { tweetZodSchema } from '../../Validators/tweetZodSchema.js';
import {getTweetByIdManualValidator} from '../../Validators/tweetManualValidator.js'
import { authenticateToken } from '../../middleware/authMiddleware.js';
const router = express.Router();

router.get('/',authenticateToken,getTweets);

router.get('/:id',authenticateToken,getTweetByIdManualValidator ,getTweetById);

router.post('/', authenticateToken,C_uploader.single('tweetImage'),validate(tweetZodSchema),createTweet);

router.delete('/:id',authenticateToken, getTweetByIdManualValidator ,deleteTweet);

router.put('/:id',authenticateToken,getTweetByIdManualValidator,updateTweet);


export default router;

 