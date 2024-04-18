import app from "./app";
import { config } from "./config/config";
app.get("/", (req, res) => {
    res.json({
      'message': 'Hello World!'
    });
})

const startServer = () => {
    const port = config.port || 3000;

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
};

startServer();