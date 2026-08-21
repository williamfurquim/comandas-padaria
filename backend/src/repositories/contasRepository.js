import { contas } from "../database/db.js";

export const findByEmail = (email) => {
    return contas.find(
        user => user.email === email
    );
}