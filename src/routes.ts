import express from 'express';
import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const classeControllers = new ClassesController();


routes.get('/classes', classeControllers.index);
routes.post('/classes', classeControllers.create);


export default routes;