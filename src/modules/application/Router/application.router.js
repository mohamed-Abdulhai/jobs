import { Router } from "express";
import { authenticate, authorize } from "../../auth/middlewares/auth.middlewares.js";
import { ApplyJob } from "../controllers/application.controllers.js";
import { upload } from "../../../middlewares/upload.middleware.js";
import { validate } from "../../../middlewares/validation.middleware.js";
import applicationValidationSchema from '../middlewares/aplyApplicatioSchema.js'
const router = Router()

router.post(
    '/apply/:jobId',
    authenticate,
    authorize('USER'),
    upload.fields([{ name: 'cvFile', maxCount: 1 }]),
    validate(applicationValidationSchema),
    ApplyJob
);
export default router