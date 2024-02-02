import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JOB', 
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER', 
        required: true,
    },
    userTechSkills: {
        type: [String],
        required: true,
    },
    userSoftSkills: {
        type: [String],
        required: true,
    },
    userResume: {
        type: String, 
        required: true,
    },
},{timestamps:true})

const Application = mongoose.model('APPLICATION', applicationSchema)
export default Application