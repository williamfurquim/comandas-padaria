import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";

function verificarJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(
      new AppError("Token não fornecido.", 401)
    );
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return next(
      new AppError("Formato do Token inválido.", 401)
    );
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        return next(
          new AppError(
            "Token inválido ou expirado.",
            401
          )
        );
      }

      req.usuario = decoded;
      next();
    }
  );
}

export default verificarJWT;