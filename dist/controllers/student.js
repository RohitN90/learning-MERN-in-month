"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../Model/users"));
const UserRouter = (0, express_1.Router)();
// To get all the students int the local variable
UserRouter.get("/allStudents", (req, res) => {
    res.json(users_1.default);
});
// To get the specific student by giving ID
UserRouter.get("/:studentid", (req, res) => {
    const studentId = req.params.studentid;
    const result = users_1.default.find((data) => {
        if (data.id.toString() == studentId) {
            return users_1.default[data.id];
        }
        else {
            return null;
        }
    });
    res.json(result);
});
// To add student in to the local variable
UserRouter.post("/addStudent", (req, res) => {
    const data = {
        email: req.body.email,
        first_name: req.body.first_name,
        gender: req.body.gender,
        id: req.body.id,
        ip_address: req.body.ip_address,
        last_name: req.body.last_name,
    };
    console.log(data);
    users_1.default.push(data);
    res.json({
        status: "success",
        message: "Student added successfully",
        data: data,
    });
});
//To udated a Student by studentId
UserRouter.put("/updateStudent/:studentid", (req, res) => {
    const id = req.params.studentid;
    const data = users_1.default.find((data) => {
        if (data.id.toString() == req.params.studentid) {
            return data;
        }
    });
    const updateData = {
        email: req.body.email,
        first_name: req.body.firstName,
        gender: req.body.gender,
        ip_address: req.body.ip_address,
        last_name: req.body.last_name,
        id: parseInt(id),
    };
    users_1.default[parseInt(id)] = updateData;
    res.json({
        success: true,
        messafge: "Student updated successfully",
        data: updateData,
    });
});
// To delete a student by studentId
UserRouter.delete("/deleteStudent/:studentid", (req, res) => {
    const id = parseInt(req.params.studentid);
    users_1.default.splice(id, 1);
    res.json({
        success: true,
        message: "Student deleted successfully",
        data: users_1.default,
    });
});
exports.default = UserRouter;
