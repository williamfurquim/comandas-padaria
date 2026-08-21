import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findByEmail } from "../repositories/contasRepository.js";
import { AppError } from "../utils/appError.js";

export async function login(email, senha) {
    const user = findByEmail(email);

    if (!user) {
        throw new AppError("Credenciais inválidas", 401);
    }

    const passwordIsValid = await bcrypt.compare(
        senha,
        user.senha
    );

    if (!passwordIsValid) {
        throw new AppError("Credenciais inválidas", 401);
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