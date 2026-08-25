import * as service from '../services/produtosService.js'

export const getAll = (req, res, next) => {
    try {
        const produtos = service.getAll();
        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

export const getById = (req, res, next) => {
    try {
        const { id } = req.params;
        const produto = service.getById(id);

        res.json(produto);
    } catch (error) {
        next(error);
    }
}

export const post = (req, res, next) => {
    try {
        const { nome, categoria, preco, quantidade, unidade, disponivel } = req.body;
        const novoProduto = service.post({ nome, categoria, preco, quantidade, unidade, disponivel });

        res.status(201).json(novoProduto);
    } catch (error) {
        next(error);
    }
}

export const remove = (req, res, next) => {
    try {
        const { id } = req.params;
        service.remove(id);

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export const update = (req, res, next) => {
    try {
        const { id } = req.params;
        const produto = service.update(id, req.body);

        res.json(produto);
    } catch (error) {
        next(error);
    }
}