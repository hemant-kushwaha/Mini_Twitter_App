import express from "express";
import {signUpUser, signInUser} from '../../Controllers/userController.js'

const router = express.Router();

router.post('/signup',signUpUser);
router.post('/signin',signInUser);

export default router;

