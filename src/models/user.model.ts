import mongoose from "mongoose";
import { UserModel } from "../types/user.types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

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
        name: {
            type: String,
            trim: true,
            max: [25, "Name must be at most 25 characters long"],
        },
        password: {
            type: String,
            trim: true,
            min: [6, "Password must be at least 6 characters long"],
            max: [16, "Password must be at most 16 characters long"],
        },
        refreshToken: {
            type: String,
            default: "",
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        verifyAndForgotCode: {
            type: String,
            default: "",
        },
        CodeExpiry: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);
userSchema.pre("save", async function (next): Promise<void> {
    // Check if the password field has been changed
    if (!this.isModified("password")) {
        return next(); // If not, just move on
    }

    // If the password has been changed, hash it
    this.password = await bcrypt.hash(this.password, 10);

    next(); // Continue with the save operation
});

userSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
};
userSchema.methods.generateRefreshToken = function (): string {
    return jwt.sign({ _id: this._id }, config.REFRESH_TOKEN_SECRET!, {
        expiresIn: "7d",
    });
};
userSchema.methods.generateAccessToken = function (): string {
    return jwt.sign({ _id: this._id }, config.ACCESS_TOKEN_SECRET!, {
        expiresIn: "1h",
    });
};
export const User = mongoose.model<UserModel>("User", userSchema);
