import { Router } from 'express';
import * as controller from '../controllers/comandasController.js';

const comandasRouter = Router();

comandasRouter.get(`/`, controller.getAll);
comandasRouter.get(`/:id`, controller.getById);
comandasRouter.post(`/`, controller.post);
comandasRouter.put(`/:id`, controller.update);
comandasRouter.delete(`/:id`, controller.remove);

export default comandasRouter;