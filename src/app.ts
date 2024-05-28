import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "./config/config";

const app = express();

app.use(cors({
    origin: config.CORS!,
    credentials: true,
}))

app.use(express.json({ limit: "32kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())


import { userRouter } from "./routes/user.route";
app.use("/api/v1/user", userRouter);

export default app;
