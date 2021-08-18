import express from 'express';
import { Controller } from './controller';
// import {request, response} from 'express'
export function createRoute (controller: Controller) {

    const routes = express.Router();
    
    // [done] CRUD task
    routes.get('/todolist', controller.getTodoList);
    routes.post('/todolist', controller.postTodoList);
    routes.delete('/todolist/:id', controller.deleteTodoList);
    routes.put('/todolist/:id', controller.putTodoList);
    
    // [todo] CRUD task
    
    // [todo] register
    routes.get('/profile', controller.getprofile);
    routes.post('/profile', controller.postprofile);
    // routes.put('/profile', controller.putprofile);
    
    // [todo] user login
    routes.post('/login', controller.login);

    
    return routes;
}