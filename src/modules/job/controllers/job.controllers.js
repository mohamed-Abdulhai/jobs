import { AppError, catchError } from "../../../utils/error.handler.js"
import Company from "../../company/model/company.model.js"
import Job from "../model/job.mode.js"





const AddJob = catchError(async (req, res) => {

    const { jobTitle,
        jobLocation,
        workingTime,
        seniorityLevel,
        jobDescription,
        technicalSkills,
        softSkills } = req.body


    const job = await Job.create({
        jobTitle,
        jobLocation,
        workingTime,
        seniorityLevel,
        jobDescription,
        technicalSkills,
        softSkills,
        addedBy:req.user.id
    })

    res.json({ message: "Seccsseflly register Job", job })
})





const updateJob = catchError(async (req, res) => {
 const { id}= req.params
    const { jobTitle,
        jobLocation,
        workingTime,
        seniorityLevel,
        jobDescription,
        technicalSkills,
        softSkills } = req.body

const job = await Job.findById(id)
if(!job) throw new AppError("Job Not Found" , 404)
    await Job.findByIdAndUpdate(id,{
        jobTitle,
        jobLocation,
        workingTime,
        seniorityLevel,
        jobDescription,
        technicalSkills,
        softSkills,
        addedBy:req.user.id
    })

    res.json({ message: "Seccsseflly updated Job" })
})


const DeleteJob= catchError(async(req ,res)=>{
    const { id}= req.params
    const job = await Job.findById(id)
    if(!job) throw new AppError("Job Not Found" , 404)
    await Job.findByIdAndDelete(id)
    res.json({ message: "Seccsseflly deleted Job" })
})


const GetAllJobsAndCompanyData = catchError(async(req,res)=>{
    
        const data = await Company.find().select("-_id") ;
        const jobs = await Job.find().populate("addedBy").select("-addedBy")
        

        res.json({ data:{
            "company info" :{ data,
            "jobs": jobs
            },

        } });

    })


const GetJobsOneCompany =catchError(async(req,res)=>{
    const {name}=req.query
    const data = await Company.findOne({name}).select("-_id")
    if(!data) throw new AppError("not found !")
    const HR = data.HR 
    const jobs = await Job.find({addedBy : HR}).select(" -addedBy -_id")
    res.json({ data :{
        "Company": data,
        "Jobs":jobs
    }  });
})
export{
    AddJob,
    updateJob,
    DeleteJob,
    GetAllJobsAndCompanyData,
    GetJobsOneCompany
}