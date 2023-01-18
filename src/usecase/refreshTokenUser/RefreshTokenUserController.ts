import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";



export class RefreshTokenController {
    async handler(req: Request, res: Response) {
          
         const { refresh_token} = req.body 
         const refreshTokenTokenUserUcase = new RefreshTokenUserUseCase()
         const token = await refreshTokenTokenUserUcase.execute(refresh_token)
         return res.json(token)
    }
}