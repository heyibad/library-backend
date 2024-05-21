import { Router } from "express";
import { signUpUser } from "../controllers/user.controller";
import { validate } from "../middleware/validate.middleware";
import { signUpSchema } from "../schema/signup.schema";

export const userRouter:Router = Router();

userRouter.route("/signup").post(validate(signUpSchema),signUpUser);
