import { AppError } from "./appError.js";

export const validarPatchProduto = (data) => {

    // Verifica se o corpo foi enviado
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new AppError(
            "Os dados do produto devem ser enviados em formato de objeto.",
            400
        );
    }

    const camposPermitidos = [
        "nome",
        "categoria",
        "preco",
        "quantidade",
        "unidade",
        "disponivel"
    ];

    // Verifica se pelo menos um campo foi enviado
    if (Object.keys(data).length === 0) {
        throw new AppError(
            "É necessário informar pelo menos um campo para atualizar.",
            400
        );
    }

    // Verifica se existem campos desconhecidos
    for (const campo of Object.keys(data)) {
        if (!camposPermitidos.includes(campo)) {
            throw new AppError(
                `O campo '${campo}' não pode ser atualizado.`,
                400
            );
        }
    }

    const {
        nome,
        categoria,
        preco,
        quantidade,
        unidade,
        disponivel
    } = data;


    // NOME
    if (nome !== undefined) {

        if (typeof nome !== "string") {
            throw new AppError(
                "O campo 'nome' deve ser uma string.",
                400
            );
        }

        if (nome.trim().length === 0) {
            throw new AppError(
                "O campo 'nome' não pode estar vazio.",
                400
            );
        }
    }


    // CATEGORIA
    if (categoria !== undefined) {

        if (typeof categoria !== "string") {
            throw new AppError(
                "O campo 'categoria' deve ser uma string.",
                400
            );
        }

        if (categoria.trim().length === 0) {
            throw new AppError(
                "O campo 'categoria' não pode estar vazio.",
                400
            );
        }
    }


    // PREÇO
    if (preco !== undefined) {

        if (typeof preco !== "number") {
            throw new AppError(
                "O campo 'preco' deve ser um número.",
                400
            );
        }

        if (!Number.isFinite(preco)) {
            throw new AppError(
                "O campo 'preco' deve conter um número válido.",
                400
            );
        }

        if (preco < 0) {
            throw new AppError(
                "O campo 'preco' não pode ser negativo.",
                400
            );
        }
    }


    // QUANTIDADE
    if (quantidade !== undefined) {

        if (typeof quantidade !== "number") {
            throw new AppError(
                "O campo 'quantidade' deve ser um número.",
                400
            );
        }

        if (!Number.isInteger(quantidade)) {
            throw new AppError(
                "O campo 'quantidade' deve ser um número inteiro.",
                400
            );
        }

        if (quantidade < 0) {
            throw new AppError(
                "O campo 'quantidade' não pode ser negativo.",
                400
            );
        }
    }


    // UNIDADE
    if (unidade !== undefined) {

        if (typeof unidade !== "string") {
            throw new AppError(
                "O campo 'unidade' deve ser uma string.",
                400
            );
        }

        if (unidade.trim().length === 0) {
            throw new AppError(
                "O campo 'unidade' não pode estar vazio.",
                400
            );
        }
    }


    // DISPONIBILIDADE
    if (disponivel !== undefined) {

        if (typeof disponivel !== "boolean") {
            throw new AppError(
                "O campo 'disponivel' deve ser um booleano.",
                400
            );
        }
    }

    return true;
};