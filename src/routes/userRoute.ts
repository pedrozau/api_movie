import { Router } from "express";
import { CreateUserController } from "../usecase/CreateUser/CreateUserController";



const userRoute = Router()

const create = new CreateUserController()

userRoute.route('/').post(create.handler)

export { userRoute }