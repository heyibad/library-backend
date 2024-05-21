import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

import { userRouter } from "./routes/user.route";
app.use("/api/v1/user", userRouter);

export default app;
