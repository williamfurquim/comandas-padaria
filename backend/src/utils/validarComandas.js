import { AppError } from "./appError.js";

const validarComanda = (data) => {

    // "Número" é um inteiro maior que 0?
    if (!Number.isInteger(data.numero) || data.numero <= 0) {
        throw new AppError('Número da comanda inválido. Deve ser um inteiro maior que 0.', 400);
    }

    // "Mesa" é um inteiro maior que 0?
    if (!Number.isInteger(data.mesa) || data.mesa <= 0) {
        throw new AppError('Mesa inválida. Deve ser um inteiro maior que 0.', 400);
    }

    // Pedido é um array com pelo menos um item?
    if (!Array.isArray(data.pedido) || data.pedido.length === 0) {
        throw new AppError('Pedido deve ser uma lista com pelo menos um item.', 400);
    }

    // Cada item possui produto válido e quantidade válida?
    for (const item of data.pedido) {

        if (
            typeof item.produto !== 'string' ||
            !item.produto.trim()
        ) {
            throw new AppError('Produto inválido. Deve ser uma string.', 400);
        }

        if (
            !Number.isInteger(item.quantidade) ||
            item.quantidade <= 0
        ) {
            throw new AppError('Quantidade inválida. Deve ser um número inteiro.', 400);
        }
    }

    // Total é um número maior que 0?
    if (
        typeof data.total !== 'number' ||
        !Number.isFinite(data.total) ||
        data.total <= 0
    ) {
        throw new AppError('Total inválido. Deve ser um número maior que 0.', 400);
    }
};

export default validarComanda;