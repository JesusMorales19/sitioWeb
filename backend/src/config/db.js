import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://fernanda:1234@cluster0.6j8qpyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
