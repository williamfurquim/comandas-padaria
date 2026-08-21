import { produtos } from "../database/db.js";

export const getAll = () => { 
    return produtos;
}

export const getById = (id) => { 
    const produto = produtos.find(p => p.id === Number(id));
    if (!produto) return null;

    return produto;
}

export const post = (data) => { 
    produtos.push(data);
    return data;
}

export const update = (id, data) => { 
    const produto = produtos.find(p => p.id === Number(id));
    if (!produto) return null;

    Object.assign(produto, {
        ...data,
        alteradoEm: new Date().toISOString()
    })

    return produto;
}

export const remove = (id) => { 
    const index = produtos.findIndex(p => p.id === Number(id));
    if (index === -1) return false;

    produtos.splice(index, 1);
    return true;
}