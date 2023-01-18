import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { database } from "../../prisma/connect"
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken"
import { GenerateToken } from "../../provider/GenerateToken"

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

        const generateToken = new GenerateToken() 

        const token = await generateToken.execute(userAlready.id)

        await database.refreshToken.deleteMany({ 
            where:{
                userId: userAlready.id
            }
        })

        const generaterefreshtoken = new GenerateRefreshToken()
        const refreshToken = await generaterefreshtoken.execute(userAlready.id)

        return  {token, refreshToken}


      }

}