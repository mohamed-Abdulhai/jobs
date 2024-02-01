import Joi from 'joi'

export const signinSchema = Joi.object({
	body: {
		email: Joi.string().email(),
		mobileNumber:Joi.number(),
		password: Joi.string().required(),
	},
	params: {},
	query: {},
})

export const signupSchema = Joi.object({
	body: {

		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        recoveryEmail: Joi.string().email(),
        DOB: Joi.string().required().pattern(/^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/),
        phone: Joi.string().required().pattern(/^[0-9]{11}$/),
        role: Joi.string().valid('USER', 'COMPANY_HR').required()
		
	},
	params: {},
	query: {},
})