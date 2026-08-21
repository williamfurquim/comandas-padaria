import express from 'express'
import comandasRouter from './routes/comandasRouter.js';
import loginRouter from './routes/contasRouter.js';
import produtosRouter from './routes/produtosRouter.js';
import verificarJWT from './middleware/verificarJWT.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

const app = express();

app.use(express.json());

app.use('/auth', loginRouter);
app.use('/comandas', verificarJWT ,comandasRouter);
app.use('/produtos', verificarJWT, produtosRouter);

app.get('/', (req, res) => {
    res.send('Olá :D')
})

app.use(globalErrorHandler);

export default app;