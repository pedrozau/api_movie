import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { database } from "../../prisma/connect"

interface IUser  {
 
     username: String | any 
     password: String | any 

}


export class AuthUserUseCase {
      
      async execute({username, password}:IUser) {

        // check user existe 

        const userAlready =  await  database.user.findFirst({
            where:{
                username
            }
        })

        if(!userAlready) {
            throw new Error('User or password is incorrect')
        }
        
    //    const secret = process.env.SECRET_KEY

        const password_true = await compare(password, userAlready.password)
        
        if(!password_true) {
            throw new Error("User or password is incorrect")
        }

        const token = sign({},"94a08da1fecbb6e8b46990538c7b50b2", {
            subject:userAlready.id,
            expiresIn:'60s'
        })

        return token 


      }

}