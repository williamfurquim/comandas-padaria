import * as repository from "../repositories/comandasRepository.js";
import { randomUUID } from 'crypto'

export const getAll = () => {
    return repository.getAll();
};

export const getById = (id) => {
    const comanda = repository.getById(id);
    if (!comanda) throw new Error('Comanda não encontrada.');

    return comanda;
};

export const post = (data) => {

    if (!data.numero || !data.mesa ||
    typeof data.pedido !== 'string' || !data.pedido.trim() || 
    data.total == null) throw new Error('Preencha todos os campos necessários.');

    const novaComanda = {
        ...data,
        id: randomUUID(),
        criadoEm: new Date().toISOString()
    }

    return repository.post(novaComanda);
};

export const update = (id, data) => {

    const comanda = repository.getById(id);
    if (!comanda) throw new Error('Comanda não encontrada.');

    if (!data.numero || !data.mesa ||
    typeof data.pedido !== 'string' || !data.pedido.trim() || 
    data.total == null) throw new Error('Preencha todos os campos necessários.');

    return repository.update(id, data);
};

export const remove = (id) => {
    const comanda = repository.getById(id);
    if (!comanda) throw new Error('Comanda não encontrada.');

    return repository.remove(id);
};

