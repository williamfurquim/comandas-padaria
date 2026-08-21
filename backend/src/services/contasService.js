import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findByEmail } from "../repositories/contasRepository.js";
import { AppError } from "../utils/appError.js";
import validarLogin from "../utils/validarLogin.js";

export async function login(email, senha) {
    
    // VALIDA SE AS CREDENCIAIS ESTÃO ACEITÁVEIS.
    validarLogin({ email, senha });

    // PROCURA NO BANCO DE DADOS O E-MAIL PASSADO.
    const user = findByEmail(email);

    if (!user) {
        throw new AppError("Credenciais inválidas.", 401);
    }

    // VERIFICA SE A SENHA ESTÁ CORRETA.
    const passwordIsValid = await bcrypt.compare(
        senha,
        user.senha
    );

    if (!passwordIsValid) {
        throw new AppError("Credenciais inválidas.", 401);
    }

    const token = jwt.sign(
        {
            userId: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    return {
        token
    };
}