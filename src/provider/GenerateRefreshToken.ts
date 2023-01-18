import dayjs from "dayjs";
import { database } from "../prisma/connect";




export class GenerateRefreshToken {
     
     async execute(userId: String | any) {
      const expiresIn: String | any = dayjs().add(15,"second").unix() 
         const generaterefreshtoken = await database.refreshToken.create({
             data:{
                userId,
                expiresIn

             }
         })

         return generaterefreshtoken

     }

}