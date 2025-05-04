import {
    createUser as createUserRepository,
    findUserByEmail as findUserByEmailRepository
} from '../repositries/userRepository.js';

import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwtUtilis.js';

export const registerUser = async ({username, email, password}) =>{

    //implemnt try catch
    //check if email already exists
    const existingUser = await findUserByEmailRepository({email});
    console.log(existingUser);
    if(existingUser){
        throw{
            message:'Email already in use',
            status: 400
        };
    }

    //Create the user
    const user = await createUserRepository({username, email, password});
    return user;

}

export const loginUser = async ({username, email, password}) =>{
    const user = await findUserByEmailRepository({email});
    console.log(email) ;

    if(!user){
        throw{
            message:'Invalid Email or Password',
            status: 400
        };
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        throw{
            message:'Invalid Email or Password',
            status: 400
        };
    }

    const token = generateToken(user);
    return {
        token,
        user : { id: user._id, email: user.email,username: user.username}
    };

};