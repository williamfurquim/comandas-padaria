import express from 'express'
import comandasRouter from './routes/comandasRoutes.js';
import { globalErrorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/comandas', comandasRouter);

app.get('/', (req, res) => {
    res.send('Olá :D')
})

app.use(globalErrorHandler);

export default app;