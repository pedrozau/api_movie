import { sign } from "jsonwebtoken"

export class GenerateToken {
    async execute(userId: String | any ){
        const token = sign({},"94a08da1fecbb6e8b46990538c7b50b2", {
            subject:userId,
            expiresIn:'60s'
        })   

        return token 
    }
}