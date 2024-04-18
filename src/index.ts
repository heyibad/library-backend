import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/db";

const startServer = () => {
    const port = config.PORT || 3000;

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
    res.json({
        message: "Hello World!",
    });
});
