import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
// import bcryptjs from "bcryptjs";
// import bcrypt from "bcryptjs/dist/bcrypt";

const userSchema = new mongoose.Schema({
        username: {
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        email: {
            type:String,
            required:true,
            unique:true,
            trim:true
        },

        password : {
            type:String,
            required:true,            
        }

},{timestamps:true});

//Hash Password before saving the user

userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcryptjs.hash(this.password,10);
    next();
})

userSchema.method.comparePassword = function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
}

const User = mongoose.model("user",userSchema);

export default User;