import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";



export class CreateUserController {
    async handler(request: Request, response: Response){
         
        
      
            
            const {name, username, password} = request.body
            
            const createuserusecase = new CreateUserUseCase()
            const user = await createuserusecase.execute({ 
                 name,
                 username,
                 password,
            })
           
            response.json(user)

        


    }
}