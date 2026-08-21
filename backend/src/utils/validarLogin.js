import { AppError } from "./appError.js";

const validarLogin = ({ email, senha }) => {
    
    if (typeof email !== "string" || !email.trim()) {
        throw new AppError("Email é obrigatório.", 400);
    }

    if (typeof senha !== "string" || !senha) {
        throw new AppError("Senha é obrigatória.", 400);
    }
};

export default validarLogin;