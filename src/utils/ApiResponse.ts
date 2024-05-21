class ApiResponse {
    status: boolean;
    message: string;
    data: string[];
    constructor(statusCode: number, message: string, data: string[]) {
        this.status = statusCode<400 ? true : false;
        this.message = message;
        this.data = data;
    }
}

export { ApiResponse };
