class ApiError extends Error {
    statusCode: number;
    message: string;
    data: null;
    errors: string[];
    stack: string;
    success: boolean;

    constructor(
        statusCode: number,
        message: string = "Internal Server Error",
        errors: string[] = [],
        stack: string = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.errors = errors;
        this.stack = stack;
        this.success = false;
    }
}

export { ApiError };