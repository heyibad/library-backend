import { User } from "../models/user.model";
import { ApiError } from "./ApiError";

interface Tokens {
    accessToken: string;
    refreshToken: string;
}
const generateTokens = async (userId: string): Promise<Tokens> => {
    const user = await User.findById({ _id: userId });
    if (!user) {
        throw new ApiError(401, "User not found | While generateTokens");
    }
    let refreshToken: string = user.generateRefreshToken();
    let accessToken: string = user.generateAccessToken();
    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave: false});
    return { accessToken, refreshToken };
};

export { generateTokens };
