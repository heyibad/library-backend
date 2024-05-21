import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
    statusCode?: number;
}

const asyncHandler =
    (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            const customError = error as CustomError;
            res.status(customError.statusCode || 500).json({
                success: false,
                message: customError.message,
            });
        }
    };

    
export { asyncHandler };
