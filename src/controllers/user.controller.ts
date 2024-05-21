import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const signUpUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    console.log("User signed up successfully!");

    res.status(201).json(
        new ApiResponse(201, "User signed up successfully!", [email, password])
    );
});

export { signUpUser };
