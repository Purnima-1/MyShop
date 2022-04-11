import asyncHandler from "express-async-handler";
import Users from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

//@desc Auth user & get token
//@route POST api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

 // if (user && bcryptjs.compare(password, user.password)) {
 if (user && user.matchPassword(password)){
    return res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@desc Get user profile
//@route POST api/users/profile
//@access Private
const getUserProfile = asyncHandler(async(req,res) => {
  const user = await Users.findById(req.user._id)
if(user){
  return res.json({
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
  }) 
} else{
  res.status(404)
  throw new Error("User not found")
}
})

//@desc Register a new user
//@route POST api/users
//@access Public

const registerUser = asyncHandler(async(req,res) => {
  const { name,email,password } = req.body
  const userExists = await Users.findOne({email})

  if(userExists) {
    res.status(400)
    throw newError('User already exists')
  }
  const user = await Users.create({
    name, email, password
  })
  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else{
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export {authUser,registerUser,getUserProfile}
