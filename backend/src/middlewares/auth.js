import jwt from "jsonwebtoken";

// middleware to get the token from the frontend verify it

export const verifyJWT = function (req, res, next) {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};
