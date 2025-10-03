// Import the jsonwebtoken library to verify and decode tokens
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    // No token found, deny access
    return res.status(401).json({
      message: "Access denied. No token provided.",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    req.user = { id: decoded.id, email: decoded.email };
    // 6. All checks passed, move to next middleware or controller
    next();
  } catch (error) {
    // If token verification fails (expired, tampered, wrong secret), deny access
    return res.status(403).json({
      message: "Invalid or expired token.",
      success: false,
    });
  }
};
