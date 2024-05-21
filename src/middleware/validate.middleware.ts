import z from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
    (schema: z.AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { data, success, error } = await schema.safeParseAsync(
                req.body
            );
            console.log(data, success);
            if (!success) {
                return res.status(400).json({
                    success,
                    message: [
                        error.issues[0]?.message,
                        error.issues[1]?.message || "",
                        error.issues[2]?.message || "",
                    ],
                });
            }
            req.body = data;
            next();
        } catch (error: any) {
            console.log("zod valiadtion error", error);
        }
    };
