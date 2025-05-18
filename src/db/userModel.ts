import mongoose from "mongoose";

interface StudentSchema {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

const studentScheme = new mongoose.Schema<StudentSchema>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  ip_address: {
    type: String,
    unique: true,
    required: true,
  },
});

const StudentModel = mongoose.model<StudentSchema>(
  "User",
  studentScheme,
  "users",
);
export default StudentModel;
export { StudentSchema };
