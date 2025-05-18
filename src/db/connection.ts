import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/student-app");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connect;
