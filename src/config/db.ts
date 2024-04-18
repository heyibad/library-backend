import mongoose from "mongoose";
import { config } from "./config";
import { Error } from "mongoose";

const DB_NAME = config.DB_NAME;

const connectDB = async () => {
    try {
        // const connection= await mongoose.connect(config.MONGO_URI as string)
        // config.MONGO_URI as string --> typecasting
        // Or -->
        mongoose.connection.on("connected", () => {
            console.log("Connected to database Successfully");
        });
        mongoose.connection.on("error", (error: Error) => {
            console.error("Error Happends while connecting to database", error);
        });
        const connection = await mongoose.connect(
            `${config.MONGO_URI}/${DB_NAME}`
        );
   
    } catch (error: any) {
        console.error(
            `Error Happends while connecting to database: ${error.message}`
        );
        process.exit(1);
    }
};

export default connectDB;
