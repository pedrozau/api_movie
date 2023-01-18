import dayjs from 'dayjs'
import { database } from "../../prisma/connect";
import { GenerateToken } from "../../provider/GenerateToken";



export class RefreshTokenUserUseCase {
     async execute(refresh_token: String | any) {
         const refreshToken = await database.refreshToken.findFirst({
             where:{
                id:refresh_token 
             }
         })

         if(!refreshToken){
            throw new Error("Refresh token invalid")
         }

         const refreshTokenExprired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn))
         
         const generateToken = new GenerateToken()
         const token = await generateToken.execute(refreshToken.userId)

         
         if (refreshTokenExprired){
            await database.refreshToken.deleteMany({
                where:{
                    userId: refreshToken.userId
                }
            })

            const generateRefreshToken = new GenerateToken()
            const refreshTokens = generateRefreshToken.execute(refreshToken.userId)
            return { token, refreshTokens }
         }


         return token 
     }
}