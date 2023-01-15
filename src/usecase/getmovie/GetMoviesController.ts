import { Request, Response } from "express";
import { GEtMoviesUserCase } from "./GetMoviesUseCase";


export class GEtMoviesController {
    
    async handler(req: Request, res: Response) {
         
        const movie = new GEtMoviesUserCase() 

        const data = await movie.execute()

        return res.json(data)

    }

}