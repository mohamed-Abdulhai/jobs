import Joi from 'joi'

export const AddjobSchema = Joi.object({
	body: {
		jobTitle: Joi.string().required(),
		jobLocaion:Joi.string().required(),
		workingTime: Joi.string().required(),
		seniorityLevel: Joi.string().required(),
		jobDescription: Joi.string().required(),
		tecnicalSkills: Joi.array().required(),
		SoftSkills: Joi.array().required(),
	},
	params: {},
	query: {},
})

export const updatejobSchema = Joi.object({
	body: {
		jobTitle: Joi.string(),
		jobLocaion:Joi.string(),
		workingTime: Joi.string(),
		seniorityLevel: Joi.string(),
		jobDescription: Joi.string(),
		tecnicalSkills: Joi.array(),
		SoftSkills: Joi.array(),
	},
	params: {
		id:Joi.string().hex().length(24)
	},
	query: {},
})

export const deletejobSchema = Joi.object({
	body: {},
	params: {
		id:Joi.string().hex().length(24)
	},
	query: {},
})

export const GetJobsOneCompanySchema = Joi.object({
	body: {},
	params: {},
	query: {
		name:Joi.string().trim().required()
	},
})
