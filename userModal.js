const mongoose= require("mongoose");


const userSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:[true , 'Name is reqired'],
        trim:true,
        maxLength:[20,'Name Must be less than 20 char']
    },

    email:{
        type:String,
        required:[true,'Email is required'],
        unique: true 
    }
});


module.exports=mongoose.model("User",userSchema);