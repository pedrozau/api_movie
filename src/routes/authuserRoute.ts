import { Router } from "express";
import { AuthUSerController } from "../usecase/auth/AuthUserController";


const login = Router() 

const auth = new AuthUSerController()

login.route('/').post(auth.handler)

export { login  }