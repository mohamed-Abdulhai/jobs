import Joi from 'joi';

const applicationValidationSchema = Joi.object({
    body: {
        jobId: Joi.string().required(),
    userId: Joi.string().required(),
    userTechSkills: Joi.array().items(Joi.string()).required(),
    userSoftSkills: Joi.array().items(Joi.string()).required()
    },
    params: {},
    query: {},
    files: Joi.object().required()
},

);

export default applicationValidationSchema;