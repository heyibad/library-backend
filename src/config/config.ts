import { config as conf } from "dotenv";

conf(); // to load the .env file
const _config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    DB_NAME: "Library",
    EMAIL_API: process.env.EMAIL_API,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    CORS: process.env.CORS,
    DOMAIN: process.env.DOMAIN,
};

export const config = Object.freeze(_config);
// to freez object so that it can not be modified(readonly)
