
import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
        trim:true
    },
    lastName: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
        trim:true,
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 200,
        required: true,
        trim: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        unique: true,
        lowerCase:true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 200,
        required: true,
        trim: true,
    },
    recoveryEmail: {
        type: String,
        minLength: 5,
        maxLength: 200,
        trim: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        lowerCase:true
    },
    DOB: {
        type: String,
        required: true,
        match:/^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/
    },
    phone: {
        type: String,
        required: true,
        minLength: 11,
        maxLength: 11,
        match: /^[0-9]{11}$/,
    },
    role: {
        type: String,
        enum: ['USER', 'COMPANY_HR'],
        required:true
    },
    status: {
        type: String,
        enum: ['OFFLINE', 'ONLINE'],
        default:'OFFLINE'
    },
})

userSchema.pre('save', function(next) {

    if (!this.username) {
    this.username = `${this.firstName} ${this.lastName}`;
    }
    next();
});

export const User = mongoose.model('USER', userSchema)