import express from 'express';
import searchApi from './Api/searchApi';
import validateToken from './middlewares/auth'
import signToken from './Auth/auth'
const routes = express.Router();
routes.post('/auth/',signToken) 
routes.use(validateToken)
routes.post('/:cep', searchApi);

export default routes;
