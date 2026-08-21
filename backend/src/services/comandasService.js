import * as repository from "../repositories/comandasRepository.js";
import validarComanda from "../utils/validarComandas.js";
import { AppError } from "../utils/appError.js";
import { randomUUID } from 'crypto'

export const getAll = () => {
    return repository.getAll();
};

export const getById = (id) => {
    const comanda = repository.getById(id);
    if (!comanda) throw new AppError('Comanda não encontrada.', 404);

    return comanda;
};

export const post = (data) => {

    validarComanda(data);

    const novaComanda = {
        ...data,
        id: randomUUID(),
        criadoEm: new Date().toISOString()
    }

    return repository.post(novaComanda);
};

export const update = (id, data) => {

    const comanda = repository.getById(id);
    if (!comanda) throw new AppError('Comanda não encontrada.', 404);

    validarComanda(data);

    return repository.update(id, data);
};

export const remove = (id) => {
    const comanda = repository.getById(id);
    if (!comanda) throw new AppError('Comanda não encontrada.', 404);

    return repository.remove(id);
};

