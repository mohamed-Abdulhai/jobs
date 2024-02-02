import Joi from 'joi'

export const AddCompanySchema = Joi.object({
	body: {
		email: Joi.string().email().required(),
		numberOfEmployee:Joi.string().required(),
		address: Joi.string().required(),
		companyEmail: Joi.string().required().trim(),
		description: Joi.string().required(),
		industry: Joi.string().trim().required(),
	},
	params: {},
	query: {},
})

export const updateCompanySchema = Joi.object({
	body: {
		email: Joi.string().email(),
		numberOfEmployee:Joi.string(),
		address: Joi.string(),
		companyEmail: Joi.string().trim(),
		description: Joi.string(),
		industry: Joi.string().trim(),
	},
	params: {
		id:Joi.string().hex().length(24)
	},
	query: {},
})