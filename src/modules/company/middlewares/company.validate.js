import Joi from 'joi'

export const AddCompanySchema = Joi.object({
	body: {
		companyName: Joi.string().required(),
		numberOfEmployee:Joi.string().required(),
		address: Joi.string().required(),
		companyEmail: Joi.string().email().required().trim(),
		description: Joi.string().required(),
		industry: Joi.string().trim().required(),
		numberOfEmployee: Joi.string().trim().required()
	},
	params: {},
	query: {},
})

export const updateCompanySchema = Joi.object({
	body: {
		companyName: Joi.string().trim(),
		numberOfEmployee:Joi.string(),
		address: Joi.string(),
		companyEmail: Joi.string().email().trim(),
		description: Joi.string(),
		industry: Joi.string().trim(),
		numberOfEmployee: Joi.string().trim()
	},
	params: {
		id:Joi.string().hex().length(24)
	},
	query: {},
})