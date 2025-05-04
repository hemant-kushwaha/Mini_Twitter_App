import { StatusCodes } from "http-status-codes";
import {
    registerUser as registerUserService,
    loginUser as loginUserService
} from "../services/userService.js";
import { errorResponse, successResponse } from '../utils/responses.js'


export const signUpUser = async (req,res) => {
    console.log("Signup request body:", req.body);

    try {
        const response = await registerUserService({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        })

        return successResponse(response, StatusCodes.CREATED, "user signed up successfully",res);
    } catch (error) {
        return errorResponse(error, res);

    }
}

export const signInUser = async (req, res) => {
    try {
        const {token,user} = await loginUserService({
            email: req.body.email,
            password: req.body.password

        });

        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:3500000
        })

        return successResponse(
            
            {user:{ id: user.id, email: user.email,username: user.username} },
                                StatusCodes.OK, "user signed In successfully",res);

    } catch (error) {
        return errorResponse(error, res);
    }
}