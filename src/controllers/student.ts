import { Router } from "express";
import StudentModel from "../db/userModel";
import { StudentSchema } from "../db/userModel";

const UserRouter = Router();

// To get all the students int the local variable
UserRouter.get("/allStudents", async (req, res) => {
  try {
    const data: StudentSchema[] = await StudentModel.find({});
    res
      .json({
        data: data,
        message: "All students data",
        status: "success",
      })
      .status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
      data: [],
    });
  }
});

// To get the specific student by giving ID
UserRouter.get("/:studentid", async (req, res) => {
  const studentId: string = req.params.studentid;
  try {
    const data: StudentSchema | null = await StudentModel.findById(studentId);
    res
      .json({
        data: data,
        message: "Student data",
        status: "success",
      })
      .status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// To add student in to the local variable
UserRouter.post("/addStudents", async (req, res) => {
  const data: StudentSchema = {
    email: req.body.email,
    first_name: req.body.first_name,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
    last_name: req.body.last_name,
  };
  try {
    const result = await StudentModel.create(data);
    res
      .json({
        status: "success",
        message: "Student added successfully",
        data: result,
      })
      .status(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

//To udated a Student by studentId
UserRouter.put("/updateStudents/:studentid", (req, res) => {});

// To delete a student by studentId
UserRouter.delete("/deleteStudents/:studentid", (req, res) => {});

export default UserRouter;
