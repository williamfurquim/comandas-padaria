import { Router } from 'express';
import * as controller from '../controllers/produtosController.js'

const produtosRouter = Router();

produtosRouter.get('/', controller.getAll);
produtosRouter.get('/:id', controller.getById);
produtosRouter.post('/', controller.post);
produtosRouter.patch('/:id', controller.update);
produtosRouter.delete('/:id', controller.remove);

export default produtosRouter;