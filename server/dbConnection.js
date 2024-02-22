import pg from "pg";
import dotenv from "dotenv";


dotenv.config();

const db = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

const connectDB = async() => {
    try{
        await db.connect();
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("Error in connecting ",error);
    }
}
export { connectDB, db };
