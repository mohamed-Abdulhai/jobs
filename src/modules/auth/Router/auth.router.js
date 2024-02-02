import { Router } from 'express'
import { signup, singin,forgetPassword,resetPassword} from '../controllers/auth.controller.js'
import { assertUniqueEmail } from '../middlewares/auth.middlewares.js'
import { validate } from '../../../middlewares/validation.middleware.js'
import {
	signinSchema,
    signupSchema,
    forgetPasswordSchema,
    resetPasswordSchema
} from '../middlewares/auth.validate.js'

const router = Router()


router.post('/signup', validate(signupSchema), assertUniqueEmail, signup)
router.post('/signin',validate(signinSchema), singin)
router.post('/forget-password', validate(forgetPasswordSchema), forgetPassword);
router.post('/reset-password', validate(resetPasswordSchema), resetPassword);

export default router