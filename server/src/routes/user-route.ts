import { Router } from "express";
import { createUser } from "../controllers/user-controller.js";

const userRouter = Router() 

userRouter.post('/add' , createUser)

export default userRouter;