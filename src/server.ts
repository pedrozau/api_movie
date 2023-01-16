require('dotenv').config() 
import express, { NextFunction, Request, Response } from 'express'

import "express-async-errors"
import { login } from './routes/authuserRoute'
import { routeFilmes } from './routes/filmes'
import { userRoute } from './routes/userRoute'

const server = express()
const PORT = process.env.PORT
server.use(express.json())
server.use('/api/v1/user', userRoute)
server.use('/api/v1/auth',login)
server.use('/api/v1/movie',routeFilmes)

server.use((error: Error, request: Request, response: Response, next: NextFunction) => {
     return response.json({
         status:"error",
         message:error.message
     })
})

server.listen(PORT, () => console.log("Server running..."))