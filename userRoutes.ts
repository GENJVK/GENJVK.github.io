import express from 'express'
import { UserController } from './UserController'

export function createUserRoute (userController: UserController) {
    const userRoutes = express.Router()

    userRoutes.post('/login',userController.login)
    userRoutes.post('/register',userController.register)

    return userRoutes
}