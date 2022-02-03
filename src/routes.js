import express from 'express';
import searchApi from './Api/searchApi';

const routes = express.Router();

routes.get('/:cep', searchApi);

export default routes;
