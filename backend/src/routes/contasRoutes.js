import { Router } from "express";
import { loginController } from "../controllers/contasController.js";

const loginRouter = Router();

loginRouter.post('/login', loginController);

export default loginRouter;