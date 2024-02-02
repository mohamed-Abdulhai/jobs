import { Router } from "express";
import { authenticate, authorize } from "../../auth/middlewares/auth.middlewares.js";
import { AddJob, DeleteJob, GetAllJobsAndCompanyData, GetJobsOneCompany, updateJob } from "../controllers/job.controllers.js";
import { validate } from "../../../middlewares/validation.middleware.js";
import { AddjobSchema, deletejobSchema, updatejobSchema } from "../middlewares/job.validate.js";

const router = Router()

router.post('/add',authenticate,authorize("COMPANY_HR") ,validate(AddjobSchema),AddJob)
router.put('/update/:id',authenticate,authorize("COMPANY_HR"),validate(updatejobSchema),updateJob)
router.delete('/delete/:id',authenticate,authorize("COMPANY_HR"),validate(deletejobSchema),DeleteJob)
router.get('/all-jobs',authenticate ,GetAllJobsAndCompanyData)
router.get('/jobs',authenticate ,GetJobsOneCompany)

export default router