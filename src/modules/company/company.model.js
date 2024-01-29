import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength:100,
    },
    description: {
        type: String,
        minLength: 8,
        maxLength: 20000,
        required:true,
    },
    industry: {
        type: String,
        required: true,
        minLength: 3,
        maxLength:100,
    },
    address: {
        type: String,
        minLength: 8,
        maxLength: 20000,
        required:true,
    },
    numberOfEmployee: {
        type: String,
        enum: ['1-10', '11-20', '21-50', '51-100', '100+'],
        required: true,
    },
    companyEmail: {
        type: String,
        minLength: 5,
        maxLength: 200,
        required: true,
        trim: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        unique: true,
        lowerCase:true,
    },
    companyHR: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    }
})

export const Company = mongoose.model('Company',companySchema)