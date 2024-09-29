import { Router } from 'express'
import userRouter from './user-route.js'

const appRouter = Router()

appRouter.use('/user' , userRouter)

export default appRouter;

