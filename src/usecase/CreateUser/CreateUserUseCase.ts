import { hash } from "bcryptjs"
import { database } from "../../prisma/connect"

interface IRequest  {
    name: String  | any 
    username: String | any 
    password: String | any 
}

export class CreateUserUseCase {
    
    async execute({name, username, password}:IRequest) {
          // user already existe 
          const useralreadyexiste = await database.user.findFirst({
             where: {
                username
             }
          })

          if(useralreadyexiste){
              throw new Error('user already existe')
          }

          const passwordHash = await hash(password, 8)


          const user = database.user.create({
              data:{
                 name,
                 username,
                 password: passwordHash
              }
          })

          return user 

         

    }

}