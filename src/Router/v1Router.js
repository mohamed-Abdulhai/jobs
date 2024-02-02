import { Router } from "express";
import authRouter from '../modules/auth/Router/auth.router.js'
import userRouter from '../modules/user/Router/user.routr.js'
import companyRouter from '../modules/company/Router/company.router.js'
import jobRouter from '../modules/job/Router/job.router.js'
import applicationRouter from "../modules/application/Router/application.router.js";
const router = Router()

router.use('/auth',authRouter)
router.use('/user', userRouter)
router.use('/company',companyRouter)
router.use('/job',jobRouter)
router.use('/application',applicationRouter)



export default router