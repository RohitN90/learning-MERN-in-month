import { Router } from "express";
import UserData from "../Model/users";
import {Users} from '../Model/users'

const UserRouter = Router()

UserRouter.get("/allStudents", (req, res) => {
    res.json(UserData)
})

UserRouter.get("/:studentid", (req, res) => {
    const studentId : string = req.params.studentid
    const result : Users | undefined  = UserData.find((data) => {
        if((data.id).toString() == studentId){
            return UserData[data.id]
        }else{
            return null
        }
    })
   res.json(result) 

})

export default UserRouter