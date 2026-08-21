import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
    throw new Error ("JWT_SECRET não configurado.");
}

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})