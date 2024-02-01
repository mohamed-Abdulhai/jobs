import { Router } from "express";
import authRouter from '../modules/auth/Router/auth.router.js'
const router = Router()

router.use('/auth',authRouter)
// router.use('/user')



export default router