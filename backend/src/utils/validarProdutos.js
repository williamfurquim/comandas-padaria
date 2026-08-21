export const validarProduto = (data) => {

    // Verifica se o corpo foi enviado
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new AppError(
            "Os dados do produto devem ser enviados em formato de objeto.",
            400
        );
    }

    const {
        nome,
        categoria,
        preco,
        quantidade,
        unidade,
        disponivel
    } = data;

    // CAMPOS OBRIGATÓRIOS

    if (nome === undefined) {
        throw new AppError(
            "O campo 'nome' é obrigatório.",
            400
        );
    }

    if (categoria === undefined) {
        throw new AppError(
            "O campo 'categoria' é obrigatório.",
            400
        );
    }

    if (preco === undefined) {
        throw new AppError(
            "O campo 'preco' é obrigatório.",
            400
        );
    }

    if (quantidade === undefined) {
        throw new AppError(
            "O campo 'quantidade' é obrigatório.",
            400
        );
    }

    if (unidade === undefined) {
        throw new AppError(
            "O campo 'unidade' é obrigatório.",
            400
        );
    }

    if (disponivel === undefined) {
        throw new AppError(
            "O campo 'disponivel' é obrigatório.",
            400
        );
    }

    // NOME

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

    // CATEGORIA

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

    // PREÇO

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

    // QUANTIDADE

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

    // UNIDADE

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

    // DISPONIBILIDADE

    if (typeof disponivel !== "boolean") {
        throw new AppError(
            "O campo 'disponivel' deve ser um booleano.",
            400
        );
    }


    // =========================
    // RETORNO
    // =========================

    return true;
};