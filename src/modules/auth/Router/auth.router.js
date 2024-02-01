import { Router } from 'express'
import { signup, singin} from '../controllers/auth.controller.js'
import { assertUniqueEmail } from '../middlewares/auth.middlewares.js'
import { validate } from '../../../middlewares/validation.middleware.js'
import {
	signinSchema,
	signupSchema,
} from '../middlewares/auth.validate.js'

const router = Router()


router.post('/signup', validate(signupSchema), assertUniqueEmail, signup)
router.post('/signin',validate(signinSchema), singin)


export default router