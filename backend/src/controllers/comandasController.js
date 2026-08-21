import * as services from '../services/comandasService.js'

export const getAll = (req, res, next) => {
    try {
        const comandas = services.getAll();
        res.json(comandas);
    } catch (error) {
       next(error); 
    }
}

export const getById = (req, res, next) => {
    try {
        const { id } = req.params;
        const comanda = services.getById(id);
        
        res.json(comanda);
    } catch (error) {
       next(error); 
    }
}

export const post = (req, res, next) => {
    try {
        const { numero, mesa, pedido, total } = req.body;
        const novaComanda = services.post({
            numero, 
            mesa, 
            pedido, 
            total
        });

        res.status(201).json(novaComanda);
    } catch (error) {
       next(error); 
    }
}

export const remove = (req, res, next) => {
    try {
        const { id } = req.params;
        services.remove(id);

        res.status(204).send();
    } catch (error) {
       next(error); 
    }
}

export const update = (req, res, next) => {
    try {
        const { id } = req.params;
        const { numero, mesa, pedido, total } = req.body;

        const comanda = services.update(id, { numero, mesa, pedido, total });
        res.json(comanda);
    } catch (error) {
       next(error); 
    }
}