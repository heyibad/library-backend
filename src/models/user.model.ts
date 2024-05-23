import mongoose from "mongoose";
import { UserModel } from "../../types/user.types";

const userSchema = new mongoose.Schema<UserModel>(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
            min: [5, "Username must be at least 5 characters long"],
            max: [20, "Username must be at most 20 characters long"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            trim: true,
            min: [6, "Password must be at least 6 characters long"],
            max: [16, "Password must be at most 16 characters long"],
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model<UserModel>("User", userSchema);
