import createHttpError from "http-errors";
import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/db";

const startServer = () => {
    const port = config.PORT || 8000;

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
};

(async () => {
    await connectDB()
        .then(() => {
            startServer();
        })
        .catch((error) => {
            console.error(
                `Error Happends while connecting to database: ${error.message}`
            );
        });
})();

app.get("/", (req, res) => {
    const error = createHttpError(404, "This is an error");
    throw error;
});
