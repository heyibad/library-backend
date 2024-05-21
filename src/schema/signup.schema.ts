import z from "zod";
import { emailValidation, passwordValidation, userNameValidation } from "./user.schema";


export const signUpSchema = z.object({
    username: userNameValidation,
    email: emailValidation,
    password: passwordValidation,
  });