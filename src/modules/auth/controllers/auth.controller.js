import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppError, catchError } from "../../../utils/error.handler.js";
import User from "../../user/model/user.model.js";


 const signup = catchError(async(req,res)=>{
	const {firstName,lastName,email,password,DOB,phone,role,recoveryEmail} = req.body
	// check if alreedy exixt
	const user = await User.findOne({phone})
	if(user) return res.status(400).json({message : "user alrady exist"})

	const hashedPassword = bcrypt.hashSync(password , +process.env.SALT)
	await User.create({
		firstName,lastName,email,password : hashedPassword,recoveryEmail,DOB,phone,role
	})
	res.json({message:"Seccsseflly Sing Up"})
	
 })



const singin = catchError(async(req,res)=>{

	const {email ,password ,phone} = req.body
	const user = await User.findOne({$or:[{email} ,{phone}]})


	if (!user || !bcrypt.compareSync(password, user.password)) throw new AppError('Invalid credentials', 400)
	
    user.status = 'ONLINE';
    const username = user.userName
    await user.save();
	
	const { role, _id: id } = user
	const token = jwt.sign({ username ,role, id }, process.env.JWT_SECRET ,{expiresIn : process.env.JWT_EXPIRES_IN})
	res.json({ token })
	
})
 

const forgetPassword = catchError(async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
    	return res.status(404).json({ message: 'User not found' });
	}

  // Generate OTP (you can customize this part based on your requirements)
  const otp = Math.floor(1000 + Math.random() * 9000).toString();



	res.json({ message: 'OTP sent successfully', otp });
});

const resetPassword = catchError(async (req, res) => {
	const { email, otp, newPassword } = req.body;
	const user = await User.findOne({ email });

  // Validate OTP (you may want to hash or encrypt the OTP for secure storage)
	if (!user || user.resetPasswordOTP !== otp) {
    	return res.status(400).json({ message: 'Invalid OTP' });
	}

  
	const updatedUser = await User.create({
    ...user.toObject(),  // Copy the existing user data
    password: bcrypt.hashSync(newPassword, +process.env.SALT),
    resetPasswordOTP: undefined, // Clear the OTP after successful reset
	});

	res.json({ message: 'Password reset successful' });
});
export{
	signup,
	singin,
	forgetPassword,
	resetPassword
}