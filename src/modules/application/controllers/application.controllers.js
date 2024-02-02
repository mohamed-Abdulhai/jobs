import Application from "../model/application.model.js";
import { catchError ,AppError } from "../../../utils/error.handler.js";


const ApplyJob = catchError(async(req,res)=>{
    const {jobId}= req.params
    const {id :userid} = req.user 
const {userTechSkills ,userSoftSkills} =req.body

   
    const apply = await Application.create({
        jobId,
        userId:userid,
        userTechSkills,
        userSoftSkills,
    })
    res.json({apply})
})

export {
    ApplyJob
}