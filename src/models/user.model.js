import mongoose, { mongo } from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "Username already exists, choose another"]
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],
        unique: false
    },
    email: {
        type: String,
        required: [true, "Please enter an email address"],
        unique: [true, "An account is already assosiated with this email id"],
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    profile: {
        type: String
    },
    verificationCode: {
        type: String,
        required: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordOTP: {
        type: String,
        required: false,
    },
    resetPasswordExpiration: {
        type: Date,
        required: false,
    },
})

export default mongoose.model('User', UserSchema);
