import { produtos } from '../database/db.js';
import * as repository from '../repositories/produtosRepository.js';
import { AppError } from '../utils/appError.js'
import { validarProduto } from '../utils/validarProdutos.js';
import { validarPatchProduto } from '../utils/validarProdutos-patch.js';

export const getAll = () => {
    return repository.getAll();
};

export const getById = (id) => {

    const produto = repository.getById(id);
    if (!produto) throw new AppError('Produto não encontrado.', 404);

    return produto;
};

export const post = (data) => {

    validarProduto(data);

    const novoId = produtos.length > 0
    ? Math.max(...produtos.map(p => p.id)) + 1
    : 1;

    const novoProduto = {
        ...data,
        id: novoId,
        criadoEm: new Date().toISOString()
    };

    return repository.post(novoProduto);
};

export const remove = (id) => {

    const produto = repository.getById(id);
    if (!produto) throw new AppError('Produto não encontrado.', 404);

    return repository.remove(id);
};

export const update = (id, data) => {

    const produto = repository.getById(id);
    if (!produto) throw new AppError('Produto não encontrado.', 404);

    validarPatchProduto(data);

    return repository.update(id, data);
};