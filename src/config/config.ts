import { config as conf} from "dotenv"

conf() // to load the .env file
const _config={
   PORT:process.env.PORT, 
   MONGO_URI:process.env.MONGO_URI,
   DB_NAME:"Library",
}


export const config= Object.freeze(_config)
// to freez object so that it can not be modified(readonly)