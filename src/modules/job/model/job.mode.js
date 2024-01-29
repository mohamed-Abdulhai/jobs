import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        minLength: 3,
        maxLength: 100,
        required: true,
        trim:true
    },
    jobLocaion: {
        type: String,
        enum: ['onsite', 'remotely','hybird'],
        required:true
    },
    workingTime:{
        type: String,
        enum: ['part-time', 'full-time'],
        required:true
    },
    seniorityLevel:{
        type: String,
        enum: ['Junior', 'Mid-Level','Senior','Team-Lead','CTO'],
        required:true,
    },
    jobDescription: {
        type: String,
        minLength: 8,
        maxLength: 1000,
        required: true,
        trim:true
    },
    tecnicalSkills: {
        type: [String],
        required:true   
    },
    SoftSkills: {
        type: [String],
        required:true   
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company', 
        required: true,
    },


})

export const Job = mongoose.model('Job',jobSchema)