import { verify } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/auth";

export default async (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return next()//return res.status(401).json({ error: 'Token not provided' });

  const [, token] = authHeader.split(' ');

  try {
    const data = verify(accessToken, ACCESS_TOKEN_SECRET) as any;
    
    (req as any).userId = data.userId;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};