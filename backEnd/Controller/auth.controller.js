import User from "../Models/user.model.js"
import bcrypt from 'bcryptjs'
import generateToken_setCookie from '../Utils/generateToken.js'

export const signup = async (req,res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body 
        //password check
        if(password !== confirmPassword){
            return res.status(400).json({"Error" : "Passwords do not match!"})
        }
        //check exist user
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({"Error" : "User already exists."})
        }
        //Hash password
        const salt = await bcrypt.genSalt(10)
        const  hashedPassword = await bcrypt.hash(password,salt)

        //profile pic random
        const boy_profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girl_profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic : gender === "male" ? boy_profilePic: girl_profilePic
        })

        if(newUser){

            //generate JWT token 
            generateToken_setCookie(newUser._id, res)

            await newUser.save()
            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profilePic : newUser.profilePic
            })
        }else{
            res.status(400).json({error : "Invalid user data"})
        }

    } catch (error) {
        res.status(400).json({"Error" : "Internal  Server Error"})
        console.log("Error in signup");
    }
}

export const login = async (req,res) => {
   try {
        const { username, password } = req.body 
        const user  = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password ,user.password || "" )

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error : "Invalid username or password"})
        }
        generateToken_setCookie(user.id, res)
        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        })

   } catch (error) {
        res.status(400).json({"Error" : "Internal  Server Error"})
        console.log("Error in Login");
    
   }
}

export const logout =  (req,res) => {
    try {
        res.cookie("jwt", "", {maxAge : 0})
        res.status(200).json({message : "Logged out successfully"})
    } catch (error) {
        res.status(400).json({"Error" : "Internal  Server Error"})
        console.log("Error in Logout");
    }
}   