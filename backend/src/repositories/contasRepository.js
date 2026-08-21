import { contas } from "../database/db.js";

export const findByEmail = (email) => {
    const user = contas.find(u => u.email === email);
    if (!user) return null;

    return user;
}