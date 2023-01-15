import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";



export class AuthUSerController  {

     async handler(request: Request, response: Response){
         
         
        

             const {username, password} = request.body 
             
             const auth = new AuthUserUseCase()
             const token = await auth.execute({
                  username,
                  password
             })
             
             response.json({
                "token":token
             })

        

     }
}