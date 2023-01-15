import {  Router } from "express";
import { virify_token } from "../middlewares/verify";
import { GEtMoviesController } from "../usecase/getmovie/GetMoviesController";






const routeFilmes = Router() 

const getmovie = new GEtMoviesController()


routeFilmes.route('/',).get(virify_token,getmovie.handler)


export { routeFilmes  }