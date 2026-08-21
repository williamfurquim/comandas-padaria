import { login } from "../services/contasService.js";

export async function loginController(req, res, next) {
    try {
        const { email, senha } = req.body;

        const acesso = await login(email, senha);

        return res.json(acesso);
    } catch (error) {
        next(error);
    }
}