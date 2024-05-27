export interface UserModel {
    _id: string;
    username: string;
    email: string;
    name: string;
    password: string;
    refreshToken: string;
    profilePicture?: string;
    coverPicture?: string;
    isVerified: boolean;
    verifyAndForgotCode: string;
    CodeExpiry: Date;
}
