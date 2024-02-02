import { Router } from "express";
import { authenticate, authorize } from "../../auth/middlewares/auth.middlewares.js";
import { validate } from "../../../middlewares/validation.middleware.js";
import { AddCompanySchema, updateCompanySchema } from "../middlewares/company.validate.js";
import { UniqueCompanyEmail, UniqueCompanyName, isOwner } from "../middlewares/company.middlewares.js";
import { AddCompany, GetCompanyData, deleteCompany, getallapplicationsOneJob, updateCompay } from "../controllers/company.controlers.js";

const router = Router()

router.post('/add' , authenticate ,authorize("COMPANY_HR"),validate(AddCompanySchema),UniqueCompanyEmail,UniqueCompanyName,AddCompany)
router.put('/update/:id' ,authenticate ,authorize("COMPANY_HR"),isOwner,validate(updateCompanySchema),UniqueCompanyEmail,UniqueCompanyName,updateCompay)
router.delete('/delete/:id' ,authenticate,authorize("COMPANY_HR"),isOwner,deleteCompany)
router.get('/application/:id' ,authenticate,authorize("COMPANY_HR"),getallapplicationsOneJob)
router.get('/:id',authenticate,authorize("COMPANY_HR"),GetCompanyData)

export default router