import { catchError ,AppError } from "../../../utils/error.handler.js";
import Company from "../../company/model/company.model.js";
import Job from "../../job/model/job.mode.js";




const AddCompany = catchError(async (req,res)=>{

    const {companyName,description,
    industry,address,
    numberOfEmployee,companyEmail} = req.body

    const company = await Company.create({
        companyName,
        description,
        industry,
        address,
        numberOfEmployee,
        companyEmail,
        HR:req.user.id
    })
    res.json({message:"Seccsseflly register company" , company})
})


const updateCompay = catchError(async (req,res)=>{
    const {companyName,description,
        industry,address,
        numberOfEmployee,companyEmail} = req.body
        const {id} = req.params
    const company = await Company.findByIdAndUpdate(id,{
        companyName,
        description,
        industry,
        address,
        numberOfEmployee,
        companyEmail,
        HR:req.user.id
    })
    res.json({message:"Seccsseflly updated company info" })
})




const deleteCompany= catchError(async(req,res)=>{
    const {id} = req.params
    const company= await Company.findById({_id :id})
    if(!company) throw new AppError("not found !" , 404)
    await Company.findByIdAndDelete({_id :id})
    res.json({message :"deleted Seccsseflly"})
})



const GetCompanyData = catchError(async(req,res)=>{
    const {id} = req.params
    const {id:HR} = req.user
    const company = await Company.findById({_id:id})
    if(!company) throw new AppError("not found !" ,404)
    const data = await Job.find({addedBy: HR})

    res.json({ company ,data})

})
const getallapplicationsOneJob = catchError(async(req, res)=>{
    
})

export{
    AddCompany,
    updateCompay,
    deleteCompany,
    GetCompanyData,
    getallapplicationsOneJob
}