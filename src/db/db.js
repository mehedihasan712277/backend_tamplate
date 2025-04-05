import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}`)
        console.log(`MongoDb connected !!! Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("DB connection error", error);
        process.exit(1);
    }
}

export default connectDB;