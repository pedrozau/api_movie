import { Router } from "express";
import { CreateUserController } from "../usecase/CreateUser/CreateUserController";
import { RefreshTokenController } from "../usecase/refreshTokenUser/RefreshTokenUserController";



const userRoute = Router()

const create = new CreateUserController()
const refreshToken = new RefreshTokenController()

userRoute.route('/').post(create.handler)
userRoute.post("/refresh-token", refreshToken.handler)

export { userRoute }