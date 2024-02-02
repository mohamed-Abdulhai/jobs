import Joi from 'joi';

const applicationValidationSchema = Joi.object({
    body: {
        userTechSkills: Joi.array().items(Joi.string()).required(),
        userSoftSkills: Joi.array().items(Joi.string()).required(),
    },
    params: {
        jobId: Joi.string().required(),
    },
    query: {},
    files: Joi.object({
        cvFile: Joi.any().required(),
    }),
});

export default applicationValidationSchema;
