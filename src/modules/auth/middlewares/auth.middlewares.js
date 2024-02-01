import jwt from 'jsonwebtoken'
import { AppError, catchError } from '../../../utils/error.handler.js'
import User from '../../user/model/user.model.js'


export const authenticate = (req, res, next) => {
	const token = req.header('token')

	if (!token || !token.startsWith('Bearer'))
		throw new AppError('Unauthorized', 401)
	const bearerToken = token.split(' ')[1]
	try {
		const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET ,{expiresIn : process.env.JWT_EXPIRES_IN})
		req.user = decoded
		next()
	} catch (error) {
		throw new AppError(error.message, 498)
	}
}

export const authorize = (role) => {
	return (req, res, next) => {
		if (role !== req.user.role) throw new AppError('Forbidden', 403)
		next()
	}
}

export const assertUniqueEmail = catchError(async (req, res, next) => {
	const { email } = req.body
	const user = await User.findOne({ email })
	if (user) throw new AppError('This email is already taken', 400)
	next()
})