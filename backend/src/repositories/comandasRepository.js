import { comandas } from '../database/db.js'

export const getAll = () => {
    return comandas;
};

export const getById = (id) => {
    const comanda = comandas.find(c => c.id === id);
    if (!comanda) return null;

    return comanda;
};

export const post = (data) => {
    comandas.push(data);
    return data;
};

export const remove = (id) => {
    const index = comandas.findIndex(c => c.id === id);
    if (index === -1) return false;

    comandas.splice(index, 1);
    return true;
};

export const update = (id, data) => {
    const comanda = comandas.find(c => c.id === id);
    if (!comanda) return null;

    Object.assign(comanda, {
        ...data,
        alteradoEm: new Date().toISOString()
    });

    return comanda;
};