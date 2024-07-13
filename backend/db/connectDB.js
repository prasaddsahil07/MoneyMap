import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

export default connectDB