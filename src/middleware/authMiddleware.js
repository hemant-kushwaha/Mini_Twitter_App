import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "my_jwt_secret_code";

export const authenticateToken = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.status(401).json({message: "Access token required"});
    }

    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded; //attaching the decoded user to the request object
        next();

    } catch (error) {
        return res.status(403).json({message: "Invalid or Expired token"});

    }

}
