import { Router } from "express";
import { userSignup , userSignin} from "../controllers/user-controller.js";

const userRouter = Router() 

// userRouter.post('/add' , createUser)
userRouter.post('/signup' , userSignup)
userRouter.post('/signin' , userSignin)

export default userRouter;