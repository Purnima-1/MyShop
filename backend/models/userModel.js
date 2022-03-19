import mongoose from "mongoose";

const userScehma = mongoose.Schema({
name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true
},
isAdmin:{
    type: Boolean,
    required: true,
    default: false
}
},{ timestamps: true })
 const Users = mongoose.model('Users', userScehma)
 export default Users