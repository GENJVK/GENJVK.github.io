import express from 'express'
import bodyParser from 'body-parser'
import { createRoute } from './routes'
import { Controller } from './controller'
import { Service } from './service';
import { UserService } from './UserService';
import { UserController } from './UserController';
import { createUserRoute } from './userRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const service = new Service();
const controller = new Controller(service);
const routes = createRoute(controller);

const userService = new UserService();
const userController = new UserController(userService)
const userRoutes = createUserRoute(userController)

app.use('/', express.static('./public'));
app.use(routes);
app.use('/user',userRoutes)

const PORT = 8080
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    console.log(`Please visit: http://localhost:${PORT}`)
})