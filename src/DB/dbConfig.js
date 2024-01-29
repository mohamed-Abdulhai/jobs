import mongoose from "mongoose";

export const dataBaseConnect = () => {
    mongoose.connect(process.env.MONGO_URL)
    try {
        console.log('Database connected');
    } catch (error) {
        console.error(error)
    }
}