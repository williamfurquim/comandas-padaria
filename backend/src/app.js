import express from 'express'
import comandasRouter from './routes/comandasRouter.js';
import loginRouter from './routes/contasRouter.js';
import verificarJWT from './middleware/verificarJWT.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

const app = express();

app.use(express.json());

app.use('/comandas', verificarJWT ,comandasRouter);
app.use('/auth', loginRouter);

app.get('/', (req, res) => {
    res.send('Olá :D')
})

app.use(globalErrorHandler);

export default app;