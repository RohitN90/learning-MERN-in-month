import { Router } from "express";
import UserData from "../Model/users";
import { Users } from "../Model/users";

const UserRouter = Router();

// To get all the students int the local variable
UserRouter.get("/allStudents", (req, res) => {
  res.json(UserData);
});

// To get the specific student by giving ID
UserRouter.get("/:studentid", (req, res) => {
  const studentId: string = req.params.studentid;
  const result: Users | undefined = UserData.find((data) => {
    if (data.id.toString() == studentId) {
      return UserData[data.id];
    } else {
      return null;
    }
  });
  res.json(result);
});

// To add student in to the local variable
UserRouter.post("/addStudents", (req, res) => {
  const data: Users = {
    email: req.body.email,
    first_name: req.body.firstName,
    gender: req.body.gender,
    id: req.body.id,
    ip_address: req.body.ip_address,
    last_name: req.body.last_name,
  };

  UserData.push(data);
  res.json({
    status: "success",
    message: "Student added successfully",
    data: data,
  });
});

//To udated a Student by studentId
UserRouter.put("/updateStudents/:studentid", (req, res) => {
  const id: string = req.params.studentid;
  const data: Users | undefined = UserData.find((data) => {
    if (data.id.toString() == req.params.studentid) {
      return data;
    }
  });

  const updateData: Users = {
    email: req.body.email,
    first_name: req.body.firstName,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
    last_name: req.body.last_name,
    id: parseInt(id),
  };

  UserData[parseInt(id)] = updateData;
  res.json({
    success: true,
    messafge: "Student updated successfully",
    data: updateData,
  });
});

// To delete a student by studentId
UserRouter.delete("/deleteStudents/:studentid", (req, res) => {
  const id: number = parseInt(req.params.studentid);
  UserData.splice(id, 1);
  res.json({
    success: true,
    message: "Student deleted successfully",
    data: UserData,
  });
});

export default UserRouter;
