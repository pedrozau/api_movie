import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function virify_token(req: Request, res: Response, next: NextFunction){

    const authToken = req.headers.authorization

    if(!authToken) {
       return res.status(401).json({
            message:"token is missing "
        })
    }

    const [,token] = authToken.split(" ") 
    
    try{
        
        verify(token,"94a08da1fecbb6e8b46990538c7b50b2") 

        return next()

    }catch(err) {
        
         return res.status(401).json({
            message:"token is invalid"
         })
    }


}