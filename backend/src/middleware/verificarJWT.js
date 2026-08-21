import jwt from "jsonwebtoken";

function verificarJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      mensagem: "Token não fornecido."
    });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      mensagem: "Formato do token inválido."
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(403).json({
          mensagem: "Token inválido ou expirado."
        });
      }

      req.usuario = decoded;

      next();
    }
  );
}

export default verificarJWT;