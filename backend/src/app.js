import express from 'express'
import comandasRouter from './routes/comandasRoutes';

const app = express();

app.use(express.json());

app.use('/comandas', comandasRouter);

app.get('/', (req, res) => {
    res.send('Olá :D')
})

export default app;