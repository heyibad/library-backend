import { config as conf} from "dotenv"

conf() // to load the .env file
const _config={
   port:process.env.PORT, 
}


export const config= Object.freeze(_config)
// to freez object so that it can not be modified(readonly)